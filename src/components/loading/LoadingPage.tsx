import { LoadingSpinner } from './LoadingSpinner';

export const LoadingPage = ({ message = 'Loading...' }: { message?: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
    <LoadingSpinner />
    <p className="text-sm text-[#17171799]">{message}</p>
  </div>
);
