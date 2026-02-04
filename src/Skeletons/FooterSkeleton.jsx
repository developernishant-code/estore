const FooterSkeleton = () => {
  return (
    <footer className="bg-gray-900 pt-12 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand Skeleton */}
        <div>
          <div className="h-6 w-32 bg-gray-700 rounded"></div>
          <div className="h-4 w-full bg-gray-700 rounded mt-4"></div>
          <div className="h-4 w-3/4 bg-gray-700 rounded mt-2"></div>

          <div className="flex gap-3 mt-4">
            <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
            <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
            <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
            <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
          </div>
        </div>

        {/* Quick Links Skeleton */}
        <div>
          <div className="h-5 w-28 bg-gray-700 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 w-24 bg-gray-700 rounded"></div>
            <div className="h-4 w-20 bg-gray-700 rounded"></div>
            <div className="h-4 w-28 bg-gray-700 rounded"></div>
            <div className="h-4 w-24 bg-gray-700 rounded"></div>
          </div>
        </div>

        {/* Categories Skeleton */}
        <div>
          <div className="h-5 w-28 bg-gray-700 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 w-32 bg-gray-700 rounded"></div>
            <div className="h-4 w-24 bg-gray-700 rounded"></div>
            <div className="h-4 w-28 bg-gray-700 rounded"></div>
            <div className="h-4 w-36 bg-gray-700 rounded"></div>
          </div>
        </div>

        {/* Newsletter Skeleton */}
        <div>
          <div className="h-5 w-32 bg-gray-700 rounded mb-4"></div>
          <div className="h-4 w-40 bg-gray-700 rounded mb-4"></div>

          <div className="flex gap-2">
            <div className="h-10 w-full bg-gray-700 rounded"></div>
            <div className="h-10 w-24 bg-gray-700 rounded"></div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="h-4 w-40 bg-gray-700 rounded"></div>
            <div className="h-4 w-32 bg-gray-700 rounded"></div>
            <div className="h-4 w-44 bg-gray-700 rounded"></div>
          </div>
        </div>

      </div>

      {/* Bottom Bar Skeleton */}
      <div className="border-t border-gray-800 mt-10 py-4">
        <div className="h-4 w-64 bg-gray-700 rounded mx-auto"></div>
      </div>
    </footer>
  );
};

export default FooterSkeleton;
