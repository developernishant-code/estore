const ProductsPageSkeleton = () => {
  return (
    <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4 animate-pulse">

      {/* LEFT CATEGORY */}
      <div className="col-span-1">

        {/* Mobile category skeleton */}
        <div className="lg:hidden overflow-x-auto">
          <div className="flex gap-4 py-3 px-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-[90px] flex flex-col items-center">
                <div className="w-[70px] h-[70px] bg-gray-300 rounded-full" />
                <div className="h-3 w-16 bg-gray-300 rounded mt-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop sidebar skeleton */}
        <div className="hidden lg:flex lg:flex-col gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-[100px] mx-auto">
              <div className="h-[100px] bg-gray-300 rounded-2xl" />
              <div className="h-4 w-20 bg-gray-300 rounded mx-auto mt-2" />
            </div>
          ))}
        </div>

      </div>

      {/* RIGHT PRODUCTS GRID */}
      <div className="col-span-5">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className=" rounded-xl p-3">
              <div className="h-40 bg-gray-300 rounded-lg" />
              <div className="h-4 w-3/4 bg-gray-300 rounded mt-3" />
              <div className="h-4 w-1/2 bg-gray-300 rounded mt-2" />
              <div className="h-8 w-full bg-gray-300 rounded mt-4" />
            </div>
          ))}
        </div>

        {/* Pagination skeleton */}
        <div className="max-w-[300px] mx-auto my-6 flex gap-3">
          <div className="h-10 w-28 bg-gray-300 rounded" />
          <div className="h-10 w-28 bg-gray-300 rounded" />
        </div>
      </div>

    </div>
  );
};

export default ProductsPageSkeleton;
