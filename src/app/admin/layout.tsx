import { VisibilityFilterProvider } from '@/contexts/VisibilityFilterContext';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AuthGuard } from '@/components/admin/AuthGuard';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <AuthGuard>
    <VisibilityFilterProvider>
      <AdminLayout>{children}</AdminLayout>
    </VisibilityFilterProvider>
  </AuthGuard>
);

export default Layout;
