'use client';

import { useState, useEffect } from 'react';
import { DrawerShell } from '../shared/DrawerShell';
import { UploadImagesPopup } from '../shared/UploadImagesPopup';
import { EntitySelectPopup } from '../shared/EntitySelectPopup';
import { ItineraryBuilder } from './ItineraryBuilder';
import { TourImagePreview } from './TourImagePreview';
import { useCreateTourMutation, useAddTourImageMutation, useGetRegionsQuery, useGetTourCategoriesQuery } from '@/graphql/hooks';
import { useBodyOverflow } from '@/hooks/useBodyOverflow';
import { ButtonSpinner } from '@/components/loading';
import { supabase } from '@/lib/supabase';
import type { ItineraryDay } from '@/types/itinerary';

interface TourCreateDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onTourCreated?: () => void;
  onRefetch?: () => void | Promise<void>;
}

interface CreateTourFormState {
  title: string;
  duration: string;
  price: string;
  description: string;
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

interface PendingNewCity {
  tempId: string;
  name: string;
  regionId: string;
}

interface PendingNewCategory {
  tempId: string;
  label: string;
}

const initialFormState: CreateTourFormState = {
  title: '',
  duration: '',
  price: '',
  description: '',
  onSale: false,
  saleDiscountPercentage: '',
};

export const TourCreateDrawer = ({ isOpen, onClose, onTourCreated, onRefetch }: TourCreateDrawerProps) => {
  const [form, setForm] = useState<CreateTourFormState>(initialFormState);
  const [images, setImages] = useState<PendingImage[]>([]);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [sessionUploads, setSessionUploads] = useState<SessionUpload[]>([]);
  const [pendingPrimaryImageUrl, setPendingPrimaryImageUrl] = useState<string | null>(null);

  const [selectedCityIds, setSelectedCityIds] = useState<string[]>([]);
  const [pendingNewCities, setPendingNewCities] = useState<PendingNewCity[]>([]);
  const [showCityPopup, setShowCityPopup] = useState(false);

  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);
  const [pendingNewCategories, setPendingNewCategories] = useState<PendingNewCategory[]>([]);
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);

  const [itineraryDays, setItineraryDays] = useState<ItineraryDay[]>([]);

  const { createTour, loading } = useCreateTourMutation();
  const { addTourImage } = useAddTourImageMutation();
  const { data: regions } = useGetRegionsQuery();
  const { data: categories } = useGetTourCategoriesQuery();

  useBodyOverflow(isOpen);

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

    useEffect(() => {
    console.log(itineraryDays)
  }, [itineraryDays]);

  const cleanupOrphanedImages = async () => {
    for (const upload of sessionUploads) {
      try {
        await supabase.storage
          .from('tours-images')
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
            .from('tours-images')
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
    const hasCities = selectedCityIds.length + pendingNewCities.length > 0;
    const hasCategories = selectedCategoryIds.length + pendingNewCategories.length > 0;

    return (
      form.title.trim() !== '' &&
      form.duration.trim() !== '' &&
      form.price.trim() !== '' &&
      images.length > 0 &&
      images.some((img) => img.isPrimary) &&
      hasCities &&
      hasCategories
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    try {
      const itineraryJson = JSON.stringify(itineraryDays);

      const result = await createTour({
        title: form.title,
        duration: form.duration,
        price: parseFloat(form.price),
        description: form.description,
        itinerary: itineraryJson,
        onSale: form.onSale,
        saleDiscountPercentage: form.saleDiscountPercentage ? parseInt(form.saleDiscountPercentage, 10) : null,
        cityIds: selectedCityIds,
        categoryIds: selectedCategoryIds,
        newCities: pendingNewCities.map((city) => ({
          name: city.name,
          regionId: city.regionId,
        })),
        newCategories: pendingNewCategories.map((cat) => ({
          label: cat.label,
        })),
      });

      if (result.data?.createTour?.id) {
        const tourId = result.data.createTour.id;

        await Promise.all(
          images.map((image) => addTourImage(tourId, image.url))
        );
      }

      setForm(initialFormState);
      setImages([]);
      setSessionUploads([]);
      setShowImagePopup(false);
      setSelectedCityIds([]);
      setPendingNewCities([]);
      setSelectedCategoryIds([]);
      setPendingNewCategories([]);
      await onRefetch?.();
      onClose();
      onTourCreated?.();
    } catch (error) {
      console.error('Failed to create tour:', error);
    }
  };

  const handleToggleCitySelection = (cityId: string) => {
    setSelectedCityIds((prev) =>
      prev.includes(cityId) ? prev.filter((id) => id !== cityId) : [...prev, cityId]
    );
  };

  const handleAddNewCity = (name: string, regionId: string) => {
    setPendingNewCities((prev) => [
      ...prev,
      { tempId: `temp-${Date.now()}`, name, regionId },
    ]);
  };

  const handleRemoveNewCity = (tempId: string) => {
    setPendingNewCities((prev) => prev.filter((city) => city.tempId !== tempId));
  };

  const handleToggleCategorySelection = (categoryId: string) => {
    setSelectedCategoryIds((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
    );
  };

  const handleAddNewCategory = (label: string) => {
    setPendingNewCategories((prev) => [
      ...prev,
      { tempId: `temp-${Date.now()}`, label },
    ]);
  };

  const handleRemoveNewCategory = (tempId: string) => {
    setPendingNewCategories((prev) => prev.filter((cat) => cat.tempId !== tempId));
  };

  const handleCloseCityPopup = () => {
    setShowCityPopup(false);
    setPendingNewCities([]);
    setSelectedCityIds([]);
  };

  const handleConfirmCities = () => {
    setShowCityPopup(false);
  };

  const handleCloseCategoryPopup = () => {
    setShowCategoryPopup(false);
    setPendingNewCategories([]);
    setSelectedCategoryIds([]);
  };

  const handleConfirmCategories = () => {
    setShowCategoryPopup(false);
  };

  return (
    <DrawerShell isOpen={isOpen} title="Create New Tour" onClose={handleClose}>
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
              bucketName="tours-images"
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
            placeholder="Enter tour title"
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
            placeholder="e.g., 5 days"
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
            placeholder="Enter tour description"
            rows={4}
            className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
          />
        </div>

        <ItineraryBuilder
          value={itineraryDays}
          onChange={setItineraryDays}
        />

        <div>
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm font-medium text-[#171717]">
              Cities *
            </label>
            <button
              type="button"
              onClick={() => setShowCityPopup(true)}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium bg-[#f7f5f0] text-[#171717] rounded border border-[#17171724] hover:bg-[#e8e5dd] hover:border-[#DC143C] transition-colors"
            >
              Select Cities ({selectedCityIds.length + pendingNewCities.length})
            </button>
          </div>
          {(selectedCityIds.length > 0 || pendingNewCities.length > 0) && (
            <div className="flex flex-wrap gap-2">
              {selectedCityIds.map((cityId) => {
                const cityData = regions.flatMap((r) => r.cities).find((c) => c.id === cityId);
                return cityData ? (
                  <span
                    key={cityId}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-[#f7f5f0] text-[#171717] rounded text-sm"
                  >
                    {cityData.name}
                  </span>
                ) : null;
              })}
              {pendingNewCities.map((city) => (
                <span
                  key={city.tempId}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-800 rounded text-sm border border-yellow-200"
                >
                  {city.name}
                  <span className="text-xs bg-yellow-200 px-1.5 py-0.5 rounded">new</span>
                </span>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm font-medium text-[#171717]">
              Categories *
            </label>
            <button
              type="button"
              onClick={() => setShowCategoryPopup(true)}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium bg-[#f7f5f0] text-[#171717] rounded border border-[#17171724] hover:bg-[#e8e5dd] hover:border-[#DC143C] transition-colors"
            >
              Select Categories ({selectedCategoryIds.length + pendingNewCategories.length})
            </button>
          </div>
          {(selectedCategoryIds.length > 0 || pendingNewCategories.length > 0) && (
            <div className="flex flex-wrap gap-2">
              {selectedCategoryIds.map((categoryId) => {
                const categoryData = categories.find((c) => c.id === categoryId);
                return categoryData ? (
                  <span
                    key={categoryId}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-[#f7f5f0] text-[#171717] rounded text-sm"
                  >
                    {categoryData.label}
                  </span>
                ) : null;
              })}
              {pendingNewCategories.map((cat) => (
                <span
                  key={cat.tempId}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-800 rounded text-sm border border-yellow-200"
                >
                  {cat.label}
                  <span className="text-xs bg-yellow-200 px-1.5 py-0.5 rounded">new</span>
                </span>
              ))}
            </div>
          )}
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
            {loading ? 'Creating...' : 'Create Tour'}
          </button>
        </div>
      </form>
      {/* Categories and cities pop up */}
      <>
            <EntitySelectPopup
        isOpen={showCityPopup}
          title="Select Cities"
          existingItems={regions.flatMap((region) =>
            region.cities.map((city) => ({
              id: city.id,
              label: city.name,
              groupLabel: region.label,
            }))
          )}
          selectedIds={selectedCityIds}
          pendingNewItems={pendingNewCities.map((city) => ({
            tempId: city.tempId,
            label: city.name,
            extraValue: regions.find((r) => r.id === city.regionId)?.label,
          }))}
          extraFieldLabel="Region"
          extraFieldOptions={regions.map((region) => ({
            label: region.label,
            value: region.id,
          }))}
          onToggleExisting={handleToggleCitySelection}
          onAddNew={(name, regionId) => handleAddNewCity(name, regionId || '')}
          onRemoveNew={handleRemoveNewCity}
          onConfirm={handleConfirmCities}
          onClose={handleCloseCityPopup}
        />
        <EntitySelectPopup
          isOpen={showCategoryPopup}
          title="Select Categories"
          existingItems={categories.map((cat) => ({
            id: cat.id,
            label: cat.label,
          }))}
          selectedIds={selectedCategoryIds}
          pendingNewItems={pendingNewCategories.map((cat) => ({
            tempId: cat.tempId,
            label: cat.label,
          }))}
          onToggleExisting={handleToggleCategorySelection}
          onAddNew={handleAddNewCategory}
          onRemoveNew={handleRemoveNewCategory}
          onConfirm={handleConfirmCategories}
          onClose={handleCloseCategoryPopup}
        />
      </>

    </DrawerShell>
  );
};
