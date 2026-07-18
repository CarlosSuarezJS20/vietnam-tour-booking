import { Suspense } from 'react';
import { AdminLoginContent } from '@/components/admin/AdminLoginContent';

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <AdminLoginContent />
    </Suspense>
  );
}
