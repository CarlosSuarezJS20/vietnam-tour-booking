'use client';

import { useState } from 'react';
import { ImageUploader } from './ImageUploader';
import { useBodyOverflow } from '@/hooks/useBodyOverflow';
import { supabase } from '@/lib/supabase';

interface UploadedImage {
  url: string;
  filename: string;
  isPrimary: boolean;
}

interface UploadImagesPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (images: UploadedImage[]) => void;
  bucketName: 'tours-images' | 'cruises-images';
  currentImageCount?: number;
}

export const UploadImagesPopup = ({
  isOpen,
  onClose,
  onConfirm,
  bucketName,
  currentImageCount = 0,
}: UploadImagesPopupProps) => {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const maxImages = 4;
  const canUploadMore = currentImageCount + uploadedImages.length < maxImages;

  useBodyOverflow(isOpen);

  if (!isOpen) return null;

  const handleAddImage = (image: { url: string; filename: string }) => {
    setUploadedImages((prev) => {
      const totalImages = currentImageCount + prev.length;
      if (totalImages >= maxImages) {
        console.warn(`Max ${maxImages} images reached`);
        return prev;
      }

      const alreadyExists = prev.some((img) => img.url === image.url);
      if (alreadyExists) {
        console.warn('Image already uploaded');
        return prev;
      }

      const newImage: UploadedImage = {
        url: image.url,
        filename: image.filename,
        isPrimary: prev.length === 0 && currentImageCount === 0,
      };
      console.log(`Added image ${prev.length + 1}/${maxImages - currentImageCount}`);
      return [...prev, newImage];
    });
  };

  const handleSetPrimary = (url: string) => {
    setUploadedImages(
      uploadedImages.map((img) => ({
        ...img,
        isPrimary: img.url === url,
      }))
    );
  };

  const handleConfirm = () => {
    onConfirm(uploadedImages);
    setUploadedImages([]);
    onClose();
  };

  const handleCancel = async () => {
    // Delete uploaded images from Supabase before closing
    for (const image of uploadedImages) {
      try {
        await supabase.storage
          .from(bucketName)
          .remove([image.filename]);
      } catch (error) {
        console.error(`Failed to delete ${image.filename}:`, error);
      }
    }

    setUploadedImages([]);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/20" onClick={handleCancel} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 border-b border-[#17171724] bg-white px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#171717]">Upload Images</h2>
            <button
              onClick={handleCancel}
              className="text-[#17171799] hover:text-[#171717] transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="p-6 space-y-6">
            {canUploadMore && (
              <div>
                <label className="block text-sm font-medium text-[#171717] mb-2">
                  Select Images (Max {maxImages - currentImageCount - uploadedImages.length} remaining)
                </label>
                <ImageUploader
                  onUpload={handleAddImage}
                  bucketName={bucketName}
                  maxFileSize={5 * 1024 * 1024}
                />
              </div>
            )}

            {uploadedImages.length > 0 && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#171717]">
                  Select Primary Image ({uploadedImages.length})
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {uploadedImages.map((image, idx) => (
                    <div
                      key={`${image.url}-${idx}`}
                      onClick={() => handleSetPrimary(image.url)}
                      className={`relative rounded border-2 cursor-pointer overflow-hidden transition-all ${
                        image.isPrimary
                          ? 'border-[#DC143C] ring-2 ring-[#DC143C]'
                          : 'border-[#17171724] hover:border-[#DC143C]'
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={`Uploaded ${idx + 1}`}
                        className="w-full h-20 object-cover"
                      />
                      {image.isPrimary && (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#DC143C]/20">
                          <div className="bg-[#DC143C] text-white px-1.5 py-0.5 rounded text-xs font-medium">
                            Primary
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {uploadedImages.length === 0 && !canUploadMore && (
              <div className="text-center py-4">
                <p className="text-sm text-[#17171799]">
                  Maximum {maxImages} images allowed per tour/cruise
                </p>
                <p className="text-sm text-[#17171799] mt-1">
                  Delete existing images to upload more
                </p>
              </div>
            )}

            <div className="flex gap-2 pt-4 border-t border-[#17171724]">
              <button
                onClick={handleCancel}
                className="flex-1 rounded px-4 py-2 text-sm font-medium bg-[#f7f5f0] text-[#171717] hover:bg-[#e8e5dd] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                disabled={uploadedImages.length === 0}
                className="flex-1 rounded px-4 py-2 text-sm font-medium bg-[#DC143C] text-white hover:bg-[#b81132] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Confirm ({uploadedImages.length})
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
