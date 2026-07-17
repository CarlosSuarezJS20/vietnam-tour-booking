'use client';

import { useState, useEffect } from 'react';
import { DrawerShell } from '../shared/DrawerShell';
import { UploadImagesPopup } from '../shared/UploadImagesPopup';
import { ItineraryBuilder } from '../tours/ItineraryBuilder';
import { TourImagePreview } from '../tours/TourImagePreview';
import {
  useUpdateCruiseMutation,
  useGetCruiseByIdQuery,
  useAddCruiseImageMutation,
  useDeleteCruiseImageMutation,
  useSetPrimaryCruiseImageMutation,
} from '@/graphql/hooks';
import { useBodyOverflow } from '@/hooks/useBodyOverflow';
import { ButtonSpinner } from '@/components/loading';
import { supabase } from '@/lib/supabase';
import { parseItinerary } from '@/lib/parseItinerary';
import type { ItineraryDay } from '@/types/itinerary';

interface CruiseEditDrawerProps {
  cruiseId: string;
  isOpen: boolean;
  onClose: () => void;
  onCruiseUpdated?: () => void;
}

interface EditCruiseFormState {
  title: string;
  duration: number | null;
  price: string;
  description: string;
  onSale: boolean;
  saleDiscountPercentage: string;
  isVisible: boolean;
}

interface PendingImage {
  id: string;
  url: string;
  isPrimary: boolean;
  isPermanent?: boolean;
}

interface SessionUpload {
  url: string;
  filename: string;
}

const initialFormState: EditCruiseFormState = {
  title: '',
  duration: null,
  price: '',
  description: '',
  onSale: false,
  saleDiscountPercentage: '',
  isVisible: true,
};

export const CruiseEditDrawer = ({ cruiseId, isOpen, onClose, onCruiseUpdated }: CruiseEditDrawerProps) => {
  const [form, setForm] = useState<EditCruiseFormState>(initialFormState);
  const [images, setImages] = useState<PendingImage[]>([]);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [sessionUploads, setSessionUploads] = useState<SessionUpload[]>([]);
  const [pendingPrimaryImageUrl, setPendingPrimaryImageUrl] = useState<string | null>(null);
  const [itineraryDays, setItineraryDays] = useState<ItineraryDay[]>([]);
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);

  const { data: existingCruise, loading: cruiseLoading } = useGetCruiseByIdQuery(cruiseId);
  const { updateCruise, loading: updateLoading } = useUpdateCruiseMutation();
  const { addCruiseImage } = useAddCruiseImageMutation();
  const { deleteCruiseImage } = useDeleteCruiseImageMutation();
  const { setPrimaryCruiseImage } = useSetPrimaryCruiseImageMutation();

  useBodyOverflow(isOpen);

  // Pre-populate form when cruise data loads
  useEffect(() => {
    if (existingCruise && isOpen) {
      setForm({
        title: existingCruise.title,
        duration: existingCruise.duration,
        price: existingCruise.price.toString(),
        description: existingCruise.description,
        onSale: existingCruise.onSale,
        saleDiscountPercentage: existingCruise.saleDiscountPercentage?.toString() || '',
        isVisible: existingCruise.isVisible,
      });

      // Pre-populate images
      const existingImages: PendingImage[] = (existingCruise.images || []).map((img) => ({
        id: img.id,
        url: img.url,
        isPrimary: img.isPrimary,
        isPermanent: true,
      }));
      setImages(existingImages);

      // Parse itinerary and convert to builder format
      if (existingCruise.itinerary) {
        let parsed: any[] = [];

        // Try JSON first
        try {
          const jsonParsed = JSON.parse(existingCruise.itinerary);
          if (Array.isArray(jsonParsed)) {
            parsed = jsonParsed;
          }
        } catch {
          // Not JSON, try text format
          parsed = parseItinerary(existingCruise.itinerary);
        }

        // Convert to builder format
        if (parsed.length > 0) {
          const builderDays: ItineraryDay[] = parsed.map((p: any) => ({
            id: `day-${p.day || p.id}`,
            day: p.day,
            activity: p.activity || p.title || '',
            description: p.description || p.body || '',
            duration: p.duration || '',
          }));
          setItineraryDays(builderDays);
        }
      }
    }
  }, [existingCruise, isOpen]);

  const handleSetPrimary = (imageId: string) => {
    setImages((prev) =>
      prev.map((img) => ({
        ...img,
        isPrimary: img.id === imageId,
      }))
    );
  };

  useEffect(() => {
    if (pendingPrimaryImageUrl) {
      const matchingImage = images.find((img) => img.url === pendingPrimaryImageUrl);
      if (matchingImage) {
        handleSetPrimary(matchingImage.id);
        setPendingPrimaryImageUrl(null);
      }
    }
  }, [images, pendingPrimaryImageUrl]);

  const cleanupOrphanedImages = async () => {
    for (const upload of sessionUploads) {
      try {
        await supabase.storage
          .from('cruises-images')
          .remove([upload.filename]);
      } catch (error) {
        console.error(`Failed to delete ${upload.filename}:`, error);
      }
    }
    setSessionUploads([]);
  };

  const handleClose = async () => {
    await cleanupOrphanedImages();
    setForm(initialFormState);
    setImages([]);
    setShowImagePopup(false);
    setItineraryDays([]);
    setImagesToDelete([]);
    onClose();
  };

  const handleAddImage = (url: string, filename?: string) => {
    if (filename) {
      setSessionUploads((prev) => [...prev, { url, filename }]);
    }

    setImages((prev) => {
      const newImage: PendingImage = {
        id: `${Date.now()}-${Math.random().toString(36).substring(7)}`,
        url,
        isPrimary: prev.length === 0,
        isPermanent: false,
      };
      return [...prev, newImage];
    });
  };

  const handleDeleteImage = async (imageId: string) => {
    const imageToDelete = images.find((img) => img.id === imageId);

    if (imageToDelete) {
      // If it's a permanent image (in DB), mark for deletion
      if (imageToDelete.isPermanent) {
        setImagesToDelete((prev) => [...prev, imageId]);
      } else {
        // If it's a new upload, delete from storage
        const upload = sessionUploads.find((u) => u.url === imageToDelete.url);
        if (upload) {
          try {
            await supabase.storage
              .from('cruises-images')
              .remove([upload.filename]);

            setSessionUploads((prev) =>
              prev.filter((u) => u.url !== imageToDelete.url)
            );
          } catch (error) {
            console.error(`Failed to delete file from storage:`, error);
          }
        }
      }
    }

    setImages((prev) => prev.filter((img) => img.id !== imageId));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        name === 'duration' && type === 'number'
          ? value === ''
            ? null
            : parseInt(value, 10)
          : type === 'checkbox'
            ? (e.target as HTMLInputElement).checked
            : value,
    }));
  };

  const getImageValidationWarning = (): string => {
    if (images.length === 0) {
      return 'At least one image is required';
    }
    if (!images.some((img) => img.isPrimary)) {
      return 'Please select a primary image';
    }
    return '';
  };

  const isFormValid = () => {
    const hasValidImages = images.length > 0 && images.some((img) => img.isPrimary);

    return (
      form.title.trim() !== '' &&
      form.duration !== null &&
      form.duration > 0 &&
      form.price.trim() !== '' &&
      hasValidImages
    );
  };

  const formatItineraryForSave = (days: ItineraryDay[]): string => {
    if (!days || days.length === 0) return '[]';
    return JSON.stringify(
      days.map(d => ({
        day: d.day,
        activity: d.activity || '',
        description: d.description || '',
      }))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    try {
      const itineraryJson = formatItineraryForSave(itineraryDays);

      // Call updateCruise mutation
      await updateCruise(cruiseId, {
        title: form.title,
        duration: form.duration as number,
        price: parseFloat(form.price),
        description: form.description,
        itinerary: itineraryJson,
        onSale: form.onSale,
        saleDiscountPercentage: form.saleDiscountPercentage
          ? parseInt(form.saleDiscountPercentage, 10)
          : null,
        isVisible: form.isVisible,
      });

      // Delete images marked for removal
      for (const imageId of imagesToDelete) {
        try {
          await deleteCruiseImage(imageId);
        } catch (error) {
          console.error(`Failed to delete image ${imageId}:`, error);
        }
      }

      // Add new images with primary flag
      const newImages = images.filter((img) => !img.isPermanent);
      for (const image of newImages) {
        await addCruiseImage(cruiseId, image.url, image.isPrimary);
      }

      // Update primary image if it's an existing image
      const primaryImage = images.find((img) => img.isPrimary);
      if (primaryImage && primaryImage.isPermanent) {
        try {
          await setPrimaryCruiseImage(primaryImage.id);
        } catch (error) {
          console.error('Failed to set primary image:', error);
        }
      }

      setForm(initialFormState);
      setImages([]);
      setSessionUploads([]);
      setShowImagePopup(false);
      setImagesToDelete([]);
      onClose();
      onCruiseUpdated?.();
    } catch (error) {
      console.error('Failed to update cruise:', error);
    }
  };

  if (cruiseLoading) {
    return (
      <DrawerShell isOpen={isOpen} title="Edit Cruise" onClose={handleClose}>
        <div className="flex items-center justify-center py-8">
          <ButtonSpinner />
        </div>
      </DrawerShell>
    );
  }

  return (
    <DrawerShell isOpen={isOpen} title="Edit Cruise" onClose={handleClose}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-[#171717]">Images *</label>
            <button
              type="button"
              onClick={() => setShowImagePopup(true)}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium bg-[#f7f5f0] text-[#171717] rounded border border-[#17171724] hover:bg-[#e8e5dd] hover:border-[#DC143C] transition-colors"
              title={`Manage images (${images.length}/4)`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span>{images.length}/4</span>
            </button>
          </div>

          <TourImagePreview
            images={images}
            onSetPrimary={handleSetPrimary}
            onDeleteImage={handleDeleteImage}
            onOpenUpload={() => setShowImagePopup(true)}
          />

          {getImageValidationWarning() && (
            <p className="text-sm text-[#DC143C] mt-2">{getImageValidationWarning()}</p>
          )}

          {showImagePopup && (
            <UploadImagesPopup
              isOpen={showImagePopup}
              onClose={() => setShowImagePopup(false)}
              onConfirm={(uploadedImages) => {
                uploadedImages.forEach((img) => {
                  handleAddImage(img.url, img.filename);
                });
                if (uploadedImages.some((img) => img.isPrimary)) {
                  const primaryImage = uploadedImages.find((img) => img.isPrimary);
                  if (primaryImage) {
                    setPendingPrimaryImageUrl(primaryImage.url);
                  }
                }
                setShowImagePopup(false);
              }}
              bucketName="cruises-images"
              currentImageCount={images.length}
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#171717] mb-2">
            Title *
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter cruise title"
            className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#171717] mb-2">
            Duration (days) *
          </label>
          <input
            type="number"
            name="duration"
            value={form.duration ?? ''}
            onChange={handleChange}
            placeholder="e.g., 5"
            min="1"
            className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#171717] mb-2">
            Price (USD) *
          </label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="0.00"
            step="0.01"
            className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#171717] mb-2">
            Status
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isVisible"
                checked={form.isVisible === true}
                onChange={() => setForm((prev) => ({ ...prev, isVisible: true }))}
                className="rounded border border-[#17171724]"
              />
              <span className="text-sm text-[#171717]">Visible</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isVisible"
                checked={form.isVisible === false}
                onChange={() => setForm((prev) => ({ ...prev, isVisible: false }))}
                className="rounded border border-[#17171724]"
              />
              <span className="text-sm text-[#171717]">Hidden</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#171717] mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter cruise description"
            rows={4}
            className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
          />
        </div>

        <ItineraryBuilder value={itineraryDays} onChange={setItineraryDays} />

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="onSale"
            name="onSale"
            checked={form.onSale}
            onChange={handleChange}
            className="rounded border border-[#17171724]"
          />
          <label
            htmlFor="onSale"
            className="text-sm font-medium text-[#171717] cursor-pointer"
          >
            On Sale
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#171717] mb-2">
            Sale Discount (%)
          </label>
          <input
            type="number"
            name="saleDiscountPercentage"
            value={form.saleDiscountPercentage}
            onChange={handleChange}
            placeholder="0"
            min="0"
            max="100"
            disabled={!form.onSale}
            className="w-24 rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none disabled:bg-[#f7f5f0] disabled:text-[#17171799] disabled:cursor-not-allowed"
          />
        </div>

        <div className="flex gap-2 pt-4 border-t border-[#17171724]">
          <button
            type="button"
            onClick={handleClose}
            className="flex-1 rounded px-4 py-2 text-sm font-medium bg-[#f7f5f0] text-[#171717] hover:bg-[#e8e5dd] transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={updateLoading || !isFormValid()}
            className="flex-1 rounded px-4 py-2 text-sm font-medium bg-[#DC143C] text-white hover:bg-[#b81132] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {updateLoading && <ButtonSpinner />}
            {updateLoading ? 'Updating...' : 'Update Cruise'}
          </button>
        </div>
      </form>
    </DrawerShell>
  );
};
