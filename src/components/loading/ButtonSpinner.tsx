export const ButtonSpinner = () => (
  <div className="inline-flex items-center justify-center">
    <div className="relative w-4 h-4">
      <div className="absolute inset-0 rounded-full border border-current border-opacity-30" />
      <div className="absolute inset-0 rounded-full border border-transparent border-t-current animate-spin" />
    </div>
  </div>
);
