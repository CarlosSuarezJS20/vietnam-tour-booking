import { VisibilityFilterProvider } from '@/contexts/VisibilityFilterContext';
import { AdminLayout } from '@/components/admin/AdminLayout';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <VisibilityFilterProvider>
    <AdminLayout>{children}</AdminLayout>
  </VisibilityFilterProvider>
);

export default Layout;
