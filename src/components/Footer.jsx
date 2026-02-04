import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import useProducts from "../hooks/useProducts";
import FooterSkeleton from "../Skeletons/FooterSkeleton";

const Footer = () => {
  const {loading} = useProducts()

  if(loading) return <FooterSkeleton />
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">ShopZone</h2>
          <p className="text-sm mt-3 text-gray-400">
            Your one-stop shop for quality products, best prices and fast delivery.
          </p>

          <div className="flex gap-3 mt-4">
            <a className="hover:text-white cursor-pointer"><Facebook size={18} /></a>
            <a className="hover:text-white cursor-pointer"><Instagram size={18} /></a>
            <a className="hover:text-white cursor-pointer"><Twitter size={18} /></a>
            <a className="hover:text-white cursor-pointer"><Youtube size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">Categories</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">About</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Electronics</li>
            <li className="hover:text-white cursor-pointer">Fashion</li>
            <li className="hover:text-white cursor-pointer">Mobiles</li>
            <li className="hover:text-white cursor-pointer">Home Appliances</li>
            <li className="hover:text-white cursor-pointer">Grocery</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe for offers & updates
          </p>
          <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 outline-none text-sm w-full"
            />
            <button className="bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-indigo-700 transition">
              Subscribe
            </button>
          </div>

          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <p className="flex items-center gap-2"><Mail size={14}/> support@shopzone.com</p>
            <p className="flex items-center gap-2"><Phone size={14}/> +91 98765 43210</p>
            <p className="flex items-center gap-2"><MapPin size={14}/> Jaipur, India</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShopZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
