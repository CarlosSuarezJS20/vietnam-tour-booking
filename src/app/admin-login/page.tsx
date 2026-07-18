'use client';

import { useState } from 'react';
import { signIn } from '@/lib/auth-client';
import Image from 'next/image';

const AdminLoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await signIn.social({
        provider: 'google',
        callbackURL: '/admin/dashboard',
      });
    } catch (err) {
      setError('Failed to sign in. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md px-6 py-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/travel-vietnam-logo-dark.svg"
            alt="Vietnam Travel Logo"
            width={160}
            height={80}
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center text-[#171717] mb-2">
          Admin Dashboard
        </h1>
        <p className="text-center text-[#17171766] mb-8">
          Sign in to manage tours and cruises
        </p>

        {/* Error message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full py-3 px-4 bg-[#DC143C] hover:bg-[#b01030] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded transition-colors"
        >
          {isLoading ? 'Signing in...' : 'Sign in with Google'}
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-[#17171766] mt-8">
          Only authorized admin users can access this dashboard
        </p>
      </div>
    </div>
  );
}

export default AdminLoginPage; 