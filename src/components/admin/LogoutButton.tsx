'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from '@/lib/auth-client';
import { FiLogOut } from 'react-icons/fi';

export function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push('/admin-login');
          },
          onError: () => {
            setError('Logout failed. Please try again.');
            setIsLoading(false);
          },
        },
      });
    } catch (err) {
      setError('Logout failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {error && <span className="text-red-600 text-xs">{error}</span>}

      <button
        onClick={handleLogout}
        disabled={isLoading}
        className="flex items-center gap-2 px-4 py-2 text-sm text-[#171717] hover:bg-[#f7f5f0] rounded transition-colors disabled:opacity-50"
      >
        <FiLogOut className="h-4 w-4" />
        {isLoading ? 'Signing out...' : 'Logout'}
      </button>
    </div>
  );
}
