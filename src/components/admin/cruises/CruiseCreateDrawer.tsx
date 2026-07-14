'use client';

import { useState, useEffect } from 'react';
import { DrawerShell } from '../shared/DrawerShell';
import { UploadImagesPopup } from '../shared/UploadImagesPopup';
import { TourImagePreview } from '../tours/TourImagePreview';
import { useCreateCruiseMutation, useAddCruiseImageMutation } from '@/graphql/hooks';
import { ButtonSpinner } from '@/components/loading';
import { supabase } from '@/lib/supabase';

interface CruiseCreateDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCruiseCreated?: () => void;
}

interface CreateCruiseFormState {
  title: string;
  duration: string;
  price: string;
  description: string;
  itinerary: string;
  sourceUrl: string;
  onSale: boolean;
  saleDiscountPercentage: string;
}

interface PendingImage {
  id: string;
  url: string;
  isPrimary: boolean;
}

interface SessionUpload {
  url: string;
  filename: string;
}

const initialFormState: CreateCruiseFormState = {
  title: '',
  duration: '',
  price: '',
  description: '',
  itinerary: '',
  sourceUrl: '',
  onSale: false,
  saleDiscountPercentage: '',
};

export const CruiseCreateDrawer = ({ isOpen, onClose, onCruiseCreated }: CruiseCreateDrawerProps) => {
  const [form, setForm] = useState<CreateCruiseFormState>(initialFormState);
  const [images, setImages] = useState<PendingImage[]>([]);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [sessionUploads, setSessionUploads] = useState<SessionUpload[]>([]);
  const [pendingPrimaryImageUrl, setPendingPrimaryImageUrl] = useState<string | null>(null);
  const { createCruise, loading } = useCreateCruiseMutation();
  const { addCruiseImage } = useAddCruiseImageMutation();

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
      };
      return [...prev, newImage];
    });
  };

  const handleDeleteImage = async (imageId: string) => {
    const imageToDelete = images.find((img) => img.id === imageId);

    if (imageToDelete) {
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

    setImages((prev) => prev.filter((img) => img.id !== imageId));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const isFormValid = () => {
    return (
      form.title.trim() !== '' &&
      form.duration.trim() !== '' &&
      form.price.trim() !== '' &&
      form.sourceUrl.trim() !== '' &&
      images.length > 0 &&
      images.some((img) => img.isPrimary)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    try {
      const result = await createCruise({
        title: form.title,
        duration: form.duration,
        price: parseFloat(form.price),
        description: form.description,
        itinerary: form.itinerary,
        sourceUrl: form.sourceUrl,
        onSale: form.onSale,
        saleDiscountPercentage: form.saleDiscountPercentage ? parseInt(form.saleDiscountPercentage, 10) : null,
      });

      if (result.data?.createCruise?.id) {
        const cruiseId = result.data.createCruise.id;

        await Promise.all(
          images.map((image) => addCruiseImage(cruiseId, image.url))
        );
      }

      setForm(initialFormState);
      setImages([]);
      setSessionUploads([]);
      setShowImagePopup(false);
      onClose();
      onCruiseCreated?.();
    } catch (error) {
      console.error('Failed to create cruise:', error);
    }
  };

  return (
    <DrawerShell isOpen={isOpen} title="Create New Cruise" onClose={handleClose}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-[#171717]">
              Images *
            </label>
            <button
            type="button"
            onClick={() => setShowImagePopup(true)}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium bg-[#f7f5f0] text-[#171717] rounded border border-[#17171724] hover:bg-[#e8e5dd] hover:border-[#DC143C] transition-colors"
            title={`Manage images (${images.length}/4)`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            Duration *
          </label>
          <input
            type="text"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            placeholder="e.g., 3 days"
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

        <div>
          <label className="block text-sm font-medium text-[#171717] mb-2">
            Itinerary
          </label>
          <textarea
            name="itinerary"
            value={form.itinerary}
            onChange={handleChange}
            placeholder="Enter cruise itinerary"
            rows={4}
            className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#171717] mb-2">
            Source URL *
          </label>
          <input
            type="url"
            name="sourceUrl"
            value={form.sourceUrl}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="onSale"
            name="onSale"
            checked={form.onSale}
            onChange={handleChange}
            className="rounded border border-[#17171724]"
          />
          <label htmlFor="onSale" className="text-sm font-medium text-[#171717] cursor-pointer">
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
            disabled={loading || !isFormValid()}
            className="flex-1 rounded px-4 py-2 text-sm font-medium bg-[#DC143C] text-white hover:bg-[#b81132] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {loading && <ButtonSpinner />}
            {loading ? 'Creating...' : 'Create Cruise'}
          </button>
        </div>
      </form>
    </DrawerShell>
  );
};
