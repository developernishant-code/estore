import React from "react";

const HeaderSkeleton = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between animate-pulse">

        {/* Logo Skeleton */}
        <div className="h-8 w-32 bg-gray-200 rounded"></div>

        {/* Search Skeleton (Desktop) */}
        <div className="hidden md:block w-1/2">
          <div className="h-10 bg-gray-200 rounded-full"></div>
        </div>

        {/* Nav Skeleton (Desktop) */}
        <div className="hidden md:flex gap-6">
          <div className="h-4 w-12 bg-gray-200 rounded"></div>
          <div className="h-4 w-14 bg-gray-200 rounded"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
          <div className="h-4 w-14 bg-gray-200 rounded"></div>
        </div>

        {/* Right Icons Skeleton */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <div className="relative">
            <div className="h-6 w-6 bg-gray-200 rounded"></div>
            <div className="absolute -top-2 -right-2 h-4 w-4 bg-gray-300 rounded-full"></div>
          </div>

          {/* Hamburger */}
          <div className="md:hidden h-6 w-6 bg-gray-200 rounded"></div>
        </div>

      </div>
    </header>
  );
};

export default HeaderSkeleton;
