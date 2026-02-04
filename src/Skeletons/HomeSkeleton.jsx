import React from "react";

const HomeSkeleton = () => {
  return (
    <div className="animate-pulse">

      {/* Banner Skeleton */}
      <div className="w-full max-w-[1550px] mx-auto h-[250px] sm:h-[400px] md:h-[550px] bg-gray-200 rounded-md" />

      {/* Brands + Categories */}
      <div className="max-w-7xl mx-auto px-4 my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((_, i) => (
          <div key={i} className="bg-white p-4 rounded space-y-4">
            <div className="h-6 w-40 bg-gray-200 rounded" />

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="h-14 w-14 bg-gray-200 rounded-full mx-auto" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Deal of the Day */}
      <div className="max-w-7xl mx-auto px-4 my-10">
        <div className="bg-gray-300 h-12 rounded-2xl mb-4" />

        <div className="bg-white rounded-2xl p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 h-[280px] bg-gray-200 rounded-xl" />

          <div className="lg:col-span-5 space-y-4">
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/3" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-6 bg-gray-200 rounded w-28" />

            <div className="h-10 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-1/3" />

            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-16 bg-gray-200 rounded-md" />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-200 rounded" />
          </div>
        </div>
      </div>

      {/* Sale Timer */}
      <div className="max-w-[1600px] mx-auto py-6">
        <div className="h-24 bg-gray-200 rounded-xl" />
      </div>

      {/* Mid Banner */}
      <div className="w-full h-[250px] bg-gray-200 my-6" />

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex justify-between mb-6">
          <div className="h-6 w-48 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-xl space-y-3">
              <div className="h-40 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-8 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomeSkeleton;
