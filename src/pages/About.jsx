import useProducts from "../hooks/useProducts";
import AboutSkeleton from "../Skeletons/AboutpageSkeleton";

const About = () => {
  const {loading} = useProducts()
  if(loading) return <AboutSkeleton />
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          About Us
        </h1>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Learn more about who we are, what we do, and why we do it.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="About us"
            className="rounded-xl shadow-lg max-h-[350px] object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            We are a passionate team dedicated to building modern, fast, and
            user-friendly web experiences. Our goal is to provide high-quality
            products that make life easier and better for our customers.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            From carefully curated products to seamless user experience, we
            focus on innovation, performance, and customer satisfaction.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
            Why Choose Us?
          </h3>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            <li>High quality & trusted products</li>
            <li>Fast and secure shopping experience</li>
            <li>Customer-first approach</li>
            <li>Modern and responsive design</li>
          </ul>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-16 bg-gray-100 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Our Mission
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm">
          Our mission is to deliver reliable, affordable, and innovative
          products while creating a smooth and enjoyable shopping experience
          for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;
