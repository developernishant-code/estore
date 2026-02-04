const ContactSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="h-8 w-48 bg-gray-300 rounded mx-auto"></div>
        <div className="h-4 w-96 bg-gray-200 rounded mx-auto mt-4"></div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Info Skeleton */}
        <div className="space-y-6">
          <div className="h-6 w-40 bg-gray-300 rounded"></div>

          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-48 bg-gray-200 rounded"></div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-40 bg-gray-200 rounded"></div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-56 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Right Form Skeleton */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <div className="h-5 w-44 bg-gray-300 rounded"></div>

          <div>
            <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
            <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
          </div>

          <div>
            <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
            <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
          </div>

          <div>
            <div className="h-4 w-28 bg-gray-200 rounded mb-2"></div>
            <div className="h-24 w-full bg-gray-200 rounded-lg"></div>
          </div>

          <div className="h-10 w-full bg-gray-300 rounded-lg mt-4"></div>
        </div>

      </div>
    </div>
  );
};

export default ContactSkeleton;
