'use client';

interface PendingImage {
  id: string;
  url: string;
  isPrimary: boolean;
}

interface TourImagePreviewProps {
  images: PendingImage[];
  onSetPrimary: (imageId: string) => void;
  onDeleteImage: (imageId: string) => void;
  onOpenUpload: () => void;
}

export const TourImagePreview = ({
  images,
  onSetPrimary,
  onDeleteImage,
  onOpenUpload,
}: TourImagePreviewProps) => {
  if (images.length === 0) return null;

  const sortedImages = [...images].sort((a, b) => (b.isPrimary ? 1 : 0) - (a.isPrimary ? 1 : 0));

  return (
    <div className="flex gap-2 flex-wrap relative z-0">
      {sortedImages.map((image) => (
        <div
          key={image.id}
          className="relative group cursor-pointer z-0"
          onClick={() => images.length > 1 && onSetPrimary(image.id)}
        >
          <img
            src={image.url}
            alt="upload"
            className={`h-20 w-20 rounded object-cover transition-all z-0 ${
              image.isPrimary
                ? 'border-2 border-[#DC143C] ring-2 ring-[#DC143C]'
                : 'border border-[#17171724] group-hover:border-[#DC143C]'
            }`}
          />
          {image.isPrimary && (
            <div className="absolute top-1 left-1 bg-[#DC143C] text-white px-1.5 py-0.5 rounded text-xs font-medium z-10">
              Primary
            </div>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteImage(image.id);
            }}
            className="absolute top-1 right-1 bg-red-600 text-white p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </button>
        </div>
      ))}

      {images.length < 4 && (
        <button
          type="button"
          onClick={onOpenUpload}
          className="h-20 w-20 rounded border-2 border-dashed border-[#17171724] flex items-center justify-center hover:border-[#DC143C] hover:bg-red-50 transition-colors"
          title="Add another image"
        >
          <svg className="w-6 h-6 text-[#17171799]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      )}
    </div>
  );
};
