import { requireAuth } from '@/lib/auth-middleware';
import { redirect } from 'next/navigation';

export async function AuthGuard({ children }: { children: React.ReactNode }) {
  try {
    await requireAuth();
  } catch (error) {
    redirect('/admin-login');
  }

  return <>{children}</>;
}
