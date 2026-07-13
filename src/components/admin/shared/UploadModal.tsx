'use client';

import { useState } from 'react';
import { DrawerShell } from './DrawerShell';
import { ImageUploader } from './ImageUploader';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (url: string) => void;
  bucketName: 'tours-images' | 'cruises-images';
  recentUploads?: string[];
}

export const UploadModal = ({
  isOpen,
  onClose,
  onUpload,
  bucketName,
  recentUploads = [],
}: UploadModalProps) => {
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const handleUpload = (url: string) => {
    setUploadedUrl(url);
  };

  const handleSubmit = () => {
    if (uploadedUrl) {
      onUpload(uploadedUrl);
      setUploadedUrl(null);
      onClose();
    }
  };

  const handleCancel = () => {
    setUploadedUrl(null);
    onClose();
  };

  return (
    <DrawerShell isOpen={isOpen} title="Upload Image" onClose={handleCancel}>
      <div className="space-y-6">
        <ImageUploader
          onUpload={handleUpload}
          bucketName={bucketName}
          maxFileSize={5 * 1024 * 1024}
        />

        {uploadedUrl && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-[#171717]">Preview</p>
            <img
              src={uploadedUrl}
              alt="Preview"
              className="w-full h-40 rounded object-cover border border-[#17171724]"
            />
          </div>
        )}

        {recentUploads.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-[#171717]">Recent Uploads</p>
            <div className="grid grid-cols-3 gap-2">
              {recentUploads.map((url) => (
                <img
                  key={url}
                  src={url}
                  alt="Recent"
                  className="w-full h-20 rounded object-cover border border-[#17171724] cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setUploadedUrl(url)}
                />
              ))}
            </div>
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
            onClick={handleSubmit}
            disabled={!uploadedUrl}
            className="flex-1 rounded px-4 py-2 text-sm font-medium bg-[#DC143C] text-white hover:bg-[#b81132] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </DrawerShell>
  );
};
