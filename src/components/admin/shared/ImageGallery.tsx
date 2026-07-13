'use client';

import { useState } from 'react';
import { UploadImagesPopup } from './UploadImagesPopup';

interface Image {
  id: string;
  url: string;
  isPrimary: boolean;
}

interface ImageGalleryProps {
  images: Image[];
  onAddImage: (url: string) => void;
  onDeleteImage: (imageId: string) => void;
  onSetPrimary: (imageId: string) => void;
  productType: 'tour' | 'cruise';
  bucketName: 'tours-images' | 'cruises-images';
  compact?: boolean;
}

export const ImageGallery = ({
  images,
  onAddImage,
  onDeleteImage,
  onSetPrimary,
  bucketName,
  compact = false,
}: ImageGalleryProps) => {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const maxImages = 4;
  const canUploadMore = images.length < maxImages;

  const handleUploadConfirm = (uploadedImages: Array<{ url: string; isPrimary: boolean }>) => {
    uploadedImages.forEach((img) => {
      onAddImage(img.url);
    });

    const primaryImage = uploadedImages.find((img) => img.isPrimary);
    if (primaryImage) {
      setTimeout(() => {
        const tempImages = [...images];
        const matchingImage = tempImages.find((img) => img.url === primaryImage.url);
        if (matchingImage) {
          onSetPrimary(matchingImage.id);
        }
      }, 100);
    }

    setUploadModalOpen(false);
  };

  const handleDeleteConfirm = (imageId: string) => {
    onDeleteImage(imageId);
    setDeleteConfirmId(null);
  };

  // Compact mode: just show a small button
  if (compact) {
    return (
      <>
        <button
          onClick={() => setUploadModalOpen(true)}
          className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium bg-[#f7f5f0] text-[#171717] rounded hover:bg-[#e8e5dd] transition-colors"
          title={`Manage images (${images.length}/${maxImages})`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <span>{images.length}/{maxImages}</span>
        </button>

        <UploadImagesPopup
          isOpen={uploadModalOpen}
          onClose={() => setUploadModalOpen(false)}
          onConfirm={handleUploadConfirm}
          bucketName={bucketName}
          currentImageCount={images.length}
        />
      </>
    );
  }

  // Full mode: show complete gallery
  const primaryImage = images.find((img) => img.isPrimary);
  const secondaryImages = images.filter((img) => !img.isPrimary);

  if (images.length === 0) {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[#171717]">Images</label>
        <div className="border border-dashed border-[#17171724] rounded p-8 text-center">
          <p className="text-sm text-[#17171799] mb-3">No images uploaded</p>
          <button
            onClick={() => setUploadModalOpen(true)}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium bg-[#f7f5f0] text-[#171717] rounded hover:bg-[#e8e5dd] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            Upload Images
          </button>
        </div>

        <UploadImagesPopup
          isOpen={uploadModalOpen}
          onClose={() => setUploadModalOpen(false)}
          onConfirm={handleUploadConfirm}
          bucketName={bucketName}
          currentImageCount={images.length}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-[#171717]">Images ({images.length}/{maxImages})</label>

      {primaryImage && (
        <div className="space-y-2">
          <p className="text-xs font-medium text-[#17171799]">Primary Image</p>
          <div className="relative rounded border border-[#17171724] overflow-hidden">
            <img
              src={primaryImage.url}
              alt="Primary"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2 bg-[#DC143C] text-white px-2 py-1 rounded text-xs font-medium">
              Primary
            </div>
            <button
              onClick={() => setDeleteConfirmId(primaryImage.id)}
              className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded hover:bg-red-700 transition-colors"
              title="Delete image"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {secondaryImages.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-medium text-[#17171799]">Secondary Images</p>
          <div className="grid grid-cols-4 gap-2">
            {secondaryImages.map((image) => (
              <div
                key={image.id}
                className="relative rounded border border-[#17171724] overflow-hidden group cursor-pointer"
                onClick={() => onSetPrimary(image.id)}
              >
                <img
                  src={image.url}
                  alt="Secondary"
                  className="w-full h-20 object-cover group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDeleteConfirmId(image.id);
                  }}
                  className="absolute top-1 right-1 bg-red-600 text-white p-0.5 rounded hover:bg-red-700 transition-colors opacity-0 group-hover:opacity-100"
                  title="Delete image"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {canUploadMore && (
        <button
          onClick={() => setUploadModalOpen(true)}
          className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium bg-[#f7f5f0] text-[#171717] rounded hover:bg-[#e8e5dd] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          Upload {maxImages - images.length} More
        </button>
      )}

      {!canUploadMore && (
        <div className="text-center py-2 px-3 bg-[#f7f5f0] rounded text-sm text-[#17171799]">
          Maximum {maxImages} images reached. Delete an image to upload more.
        </div>
      )}

      <UploadImagesPopup
        isOpen={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
        onConfirm={handleUploadConfirm}
        bucketName={bucketName}
        currentImageCount={images.length}
      />

      {deleteConfirmId && (
        <div className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center">
          <div className="bg-white rounded shadow-lg p-6 max-w-sm">
            <p className="text-sm font-medium text-[#171717] mb-4">Delete this image?</p>
            <div className="flex gap-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 px-3 py-2 text-sm font-medium bg-[#f7f5f0] text-[#171717] rounded hover:bg-[#e8e5dd] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteConfirm(deleteConfirmId)}
                className="flex-1 px-3 py-2 text-sm font-medium bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
