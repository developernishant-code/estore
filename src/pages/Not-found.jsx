import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      
      {/* 404 Text */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-indigo-600">
        404
      </h1>

      {/* Message */}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-600 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
