import { Mail, Phone, MapPin } from "lucide-react";
import ContactSkeleton from "../Skeletons/ContactSkeleton";
import useProducts from "../hooks/useProducts";

const Contact = () => {
  const {loading} = useProducts()
  if(loading) return <ContactSkeleton />
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Have questions or need support? We’d love to hear from you.
        </p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Get in Touch
          </h2>

          <p className="text-gray-600 text-sm">
            Reach out to us anytime. Our team is always ready to help you.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="text-indigo-600" />
              <span className="text-gray-700 text-sm">
                support@shopzone.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-indigo-600" />
              <span className="text-gray-700 text-sm">
                +91 98765 43210
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-600" />
              <span className="text-gray-700 text-sm">
                Jaipur, Rajasthan, India
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Send us a Message
          </h2>

          <form className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
