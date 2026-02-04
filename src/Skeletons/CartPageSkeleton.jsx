const CartSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10 animate-pulse">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT - CART ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          
          {/* Heading */}
          <div className="h-7 w-48 bg-gray-300 rounded"></div>

          {/* Cart Item Skeleton */}
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-4 flex gap-4"
            >
              {/* Image */}
              <div className="w-28 h-28 bg-gray-200 rounded"></div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>

                {/* Qty */}
                <div className="flex items-center gap-3 mt-3">
                  <div className="h-8 w-8 bg-gray-200 rounded"></div>
                  <div className="h-5 w-6 bg-gray-300 rounded"></div>
                  <div className="h-8 w-8 bg-gray-200 rounded"></div>
                </div>

                <div className="h-4 w-20 bg-gray-200 rounded mt-2"></div>
              </div>

              {/* Price */}
              <div className="h-6 w-20 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>

        {/* RIGHT - PRICE SUMMARY */}
        <div className="bg-white rounded-lg p-6 h-fit space-y-4">
          
          <div className="h-6 w-40 bg-gray-300 rounded"></div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>

            <div className="flex justify-between">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>

            <div className="h-px bg-gray-200"></div>

            <div className="flex justify-between">
              <div className="h-5 w-32 bg-gray-300 rounded"></div>
              <div className="h-5 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>

          <div className="h-12 w-full bg-gray-300 rounded mt-6"></div>
        </div>

      </div>
    </div>
  );
};

export default CartSkeleton;
