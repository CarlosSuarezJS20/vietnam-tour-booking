import { getSession } from '@/lib/auth-middleware';
import { redirect } from 'next/navigation';

export async function AuthGuard({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  if (!session) {
    redirect('/admin-login');
  }

  return <>{children}</>;
}
