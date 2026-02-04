const AboutSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
      
      {/* Heading Skeleton */}
      <div className="text-center mb-10">
        <div className="h-8 w-48 bg-gray-300 rounded mx-auto"></div>
        <div className="h-4 w-96 bg-gray-200 rounded mx-auto mt-4"></div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image Skeleton */}
        <div className="flex justify-center">
          <div className="w-full max-w-md h-[300px] bg-gray-300 rounded-xl"></div>
        </div>

        {/* Text Skeleton */}
        <div>
          <div className="h-6 w-40 bg-gray-300 rounded mb-4"></div>

          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
          </div>

          <div className="h-5 w-36 bg-gray-300 rounded mt-6 mb-3"></div>

          <div className="space-y-2">
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
            <div className="h-4 w-3/5 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Mission Section Skeleton */}
      <div className="mt-16 bg-gray-200 rounded-xl p-8 text-center">
        <div className="h-6 w-48 bg-gray-300 rounded mx-auto mb-4"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded mx-auto mb-2"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded mx-auto"></div>
      </div>

    </div>
  );
};

export default AboutSkeleton;
