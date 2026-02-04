const ProductDetailSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 animate-pulse">

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Image Skeleton */}
        <div className="bg-gray-200 rounded-xl h-[420px]" />

        {/* Details Skeleton */}
        <div className="space-y-4">
          <div className="h-8 w-3/4 bg-gray-300 rounded" />
          <div className="h-4 w-1/3 bg-gray-300 rounded" />

          {/* Rating */}
          <div className="flex gap-3">
            <div className="h-6 w-20 bg-gray-300 rounded" />
            <div className="h-4 w-24 bg-gray-300 rounded" />
          </div>

          {/* Price */}
          <div className="flex gap-3 mt-4">
            <div className="h-8 w-28 bg-gray-300 rounded" />
            <div className="h-5 w-20 bg-gray-300 rounded" />
          </div>

          <div className="h-4 w-24 bg-gray-300 rounded" />

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded" />
            <div className="h-4 w-full bg-gray-300 rounded" />
            <div className="h-4 w-3/4 bg-gray-300 rounded" />
          </div>

          {/* Extra Info */}
          <div className="space-y-2 mt-4">
            <div className="h-4 w-1/2 bg-gray-300 rounded" />
            <div className="h-4 w-1/3 bg-gray-300 rounded" />
            <div className="h-4 w-2/5 bg-gray-300 rounded" />
          </div>

          {/* Button */}
          <div className="h-12 w-40 bg-gray-300 rounded-lg mt-6" />
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-12 space-y-4">
        <div className="h-6 w-48 bg-gray-300 rounded" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-4 space-y-2">
            <div className="h-4 w-24 bg-gray-300 rounded" />
            <div className="h-4 w-full bg-gray-300 rounded" />
            <div className="h-3 w-32 bg-gray-300 rounded" />
          </div>
        ))}
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <div className="h-8 w-56 bg-gray-300 rounded mx-auto mb-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border rounded-xl p-3 space-y-3">
              <div className="h-40 bg-gray-300 rounded-lg" />
              <div className="h-4 w-3/4 bg-gray-300 rounded" />
              <div className="h-4 w-1/2 bg-gray-300 rounded" />
              <div className="h-8 w-full bg-gray-300 rounded" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetailSkeleton;
