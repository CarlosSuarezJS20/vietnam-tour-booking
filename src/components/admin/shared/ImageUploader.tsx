'use client';

import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { supabase } from '@/lib/supabase';

interface ImageUploaderProps {
  onUpload: (image: { url: string; filename: string }) => void;
  bucketName: 'tours-images' | 'cruises-images';
  maxFileSize?: number;
}

export const ImageUploader = ({
  onUpload,
  bucketName,
  maxFileSize = 5 * 1024 * 1024,
}: ImageUploaderProps) => {
  const [uploadingCount, setUploadingCount] = useState(0);

  const handleUpload = async (file: File) => {
    if (file.size > maxFileSize) {
      console.error('File too large');
      return;
    }

    setUploadingCount((prev) => prev + 1);
    try {
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}-${file.name}`;
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(fileName, file);

      if (error) throw error;

      const {
        data: { publicUrl },
      } = supabase.storage.from(bucketName).getPublicUrl(data.path);

      onUpload({ url: publicUrl, filename: fileName });
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploadingCount((prev) => prev - 1);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => handleUpload(file));
    },
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
    maxSize: maxFileSize,
    disabled: uploadingCount > 0,
  });

  const isLoading = uploadingCount > 0;

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
        isDragActive
          ? 'border-[#DC143C] bg-red-50'
          : 'border-[#17171724] hover:border-[#DC143C]'
      } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <input {...getInputProps()} />
      <svg
        className="w-12 h-12 mx-auto mb-4 text-[#171717]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        />
      </svg>
      {isLoading ? (
        <p className="text-sm text-[#17171799]">Uploading {uploadingCount} file(s)...</p>
      ) : (
        <>
          <p className="text-sm font-medium text-[#171717]">
            Drag and drop images here or click
          </p>
          <p className="text-xs text-[#17171799] mt-1">PNG, JPG up to 5MB each</p>
        </>
      )}
    </div>
  );
};
