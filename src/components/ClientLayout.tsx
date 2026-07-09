'use client';

import { usePathname } from 'next/navigation';
import CartDrawer from '@/components/cart/CartDrawer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPage && <CartDrawer />}
      {children}
    </>
  );
}
