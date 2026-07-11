'use client';

interface EditDrawerProps {
  isOpen: boolean;
  item: any;
  title: string;
  onClose: () => void;
}

export const EditDrawer = ({ isOpen, item, title, onClose }: EditDrawerProps) => {
  if (!isOpen || !item) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/20 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 z-50 h-screen w-1/2 overflow-y-auto bg-white shadow-lg transition-transform">
        <div className="sticky top-0 border-b border-[#17171724] bg-white px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#171717]">{title}</h2>
          <button
            onClick={onClose}
            className="text-[#17171799] hover:text-[#171717] transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          {item.imageUrl && (
            <div>
              <label className="block text-sm font-medium text-[#171717] mb-2">
                Image
              </label>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 rounded object-cover"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-[#171717] mb-2">
              Title
            </label>
            <input
              type="text"
              defaultValue={item.title}
              className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
              disabled
            />
          </div>

          {item.duration && (
            <div>
              <label className="block text-sm font-medium text-[#171717] mb-2">
                Duration
              </label>
              <input
                type="text"
                defaultValue={item.duration}
                className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
                disabled
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-[#171717] mb-2">
              Price
            </label>
            <input
              type="text"
              defaultValue={`$${item.price.toFixed(2)}`}
              className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
              disabled
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#171717] mb-2">
              Description
            </label>
            <textarea
              defaultValue={item.description}
              className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
              rows={4}
              disabled
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#171717] mb-2">
              Itinerary
            </label>
            <textarea
              defaultValue={item.itinerary || ''}
              className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
              rows={4}
              disabled
            />
          </div>

          {item.sourceUrl && (
            <div>
              <label className="block text-sm font-medium text-[#171717] mb-2">
                Source URL
              </label>
              <input
                type="text"
                defaultValue={item.sourceUrl}
                className="w-full rounded border border-[#17171724] px-3 py-2 text-sm focus:border-[#DC143C] focus:outline-none"
                disabled
              />
            </div>
          )}

          <div className="flex gap-2 pt-4 border-t border-[#17171724]">
            <button
              onClick={onClose}
              className="flex-1 rounded px-4 py-2 text-sm font-medium bg-[#f7f5f0] text-[#171717] hover:bg-[#e8e5dd] transition-colors"
            >
              Close
            </button>
            <button
              disabled
              className="flex-1 rounded px-4 py-2 text-sm font-medium bg-[#DC143C] text-white opacity-50 cursor-not-allowed"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
