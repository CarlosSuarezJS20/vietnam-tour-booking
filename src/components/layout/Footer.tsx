export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🇻🇳</span>
            <span className="font-semibold text-white">VietTours</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} VietTours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
