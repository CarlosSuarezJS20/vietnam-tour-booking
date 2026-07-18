import { auth } from './auth';
import { headers } from 'next/headers';

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '').split(',').map(e => e.trim()).filter(Boolean);

export async function getSession() {
  const headersList = await headers();
  return auth.api.getSession({
    headers: headersList,
  });
}

export async function requireAuth() {
  const session = await getSession();

  if (!session) {
    throw new Error('Unauthorized');
  }

  if (ADMIN_EMAILS.length > 0 && !ADMIN_EMAILS.includes(session.user.email)) {
    throw new Error('Not authorized');
  }

  return session;
}
