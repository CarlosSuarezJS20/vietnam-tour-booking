'use client';

interface ErrorPageProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showDetails?: boolean;
  error?: unknown;
}

export const ErrorPage = ({
  title = 'Something went wrong',
  message = 'An unexpected error occurred. Please try again.',
  onRetry,
  showDetails = false,
  error
}: ErrorPageProps) => {
  const errorMessage = error instanceof Error ? error.message : String(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-6">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0-6a4 4 0 110-8 4 4 0 010 8z" />
        </svg>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-[#171717]">{title}</h1>
        <p className="mt-2 text-sm text-[#17171799]">{message}</p>
      </div>
      {showDetails && errorMessage && (
        <div className="mt-2 p-3 rounded bg-red-50 border border-red-200 max-w-md">
          <p className="text-xs text-red-700 font-mono">{errorMessage}</p>
        </div>
      )}
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-4 py-2 rounded bg-[#DC143C] text-white hover:bg-[#b81132] transition-colors text-sm font-medium"
        >
          Try again
        </button>
      )}
    </div>
  );
};
