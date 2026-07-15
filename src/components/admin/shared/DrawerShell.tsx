'use client';

interface DrawerShellProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const DrawerShell = ({ isOpen, title, onClose, children }: DrawerShellProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/20 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 z-50 h-screen w-1/2 overflow-y-auto overflow-x-hidden bg-white shadow-lg transition-transform">
        <div className="sticky top-0 z-50 border-b border-[#17171724] bg-white px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#171717]">{title}</h2>
          <button
            onClick={onClose}
            className="text-[#17171799] hover:text-[#171717] transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {children}
        </div>
      </div>
    </>
  );
};
