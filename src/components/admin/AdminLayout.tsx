import { Sidebar } from './Sidebar';

export const AdminLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen min-w-screen bg-white">
    <Sidebar />
    <main className="flex-1 flex flex-col">
      {/* TopBar placeholder */}
      <div className="border-b border-[#17171724] bg-white px-6 py-4">
        {/* TopBar component will go here */}
      </div>
      {/* Main content */}
      <div className="flex-1 overflow-auto p-6">{children}</div>
    </main>
  </div>
);
