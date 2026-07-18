import { requireAuth } from '@/lib/auth-middleware';
import { redirect } from 'next/navigation';

export async function AuthGuard({ children }: { children: React.ReactNode }) {
  try {
    await requireAuth();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unauthorized';
    const errorParam = message === 'Not authorized' ? 'unauthorized' : 'unauthorized';
    redirect(`/admin-login?error=${errorParam}`);
  }

  return <>{children}</>;
}
