import { useState } from "react";
import {
    ShoppingCart,
    Search,
    User,
    Menu,
    X,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navitems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Products",
            path: "/products"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]

    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-50">
            {/* Top Header */}
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-indigo-600">
                    ShopZone
                </h1>

                {/* Desktop Search */}
                <div className="hidden md:flex items-center w-1/2 bg-gray-100 rounded-full px-4 py-2">
                    <Search size={18} className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="bg-transparent outline-none px-3 w-full text-sm"
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {
                        navitems.map((items, index) => {
                            return <Link key={index} to={items.path} className="hover:text-indigo-600" >{items.name}</Link>
                        })
                    }


                </nav>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Cart */}
                    <div className="relative cursor-pointer">
                        <ShoppingCart />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            2
                        </span>
                    </div>

                    {/* Login (Desktop only) */}
                    

                    {/* Hamburger */}
                    <button
                        className="md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t">
                    {/* Mobile Search */}
                    <div className="px-4 py-3">
                        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                            <Search size={18} className="text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="bg-transparent outline-none px-3 w-full text-sm"
                            />
                        </div>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-col gap-3 px-4 pb-4 text-sm font-medium">
                        {
                            navitems.map((items, index) => {
                                return <Link key={index} to={items.path} className="hover:text-indigo-600" >{items.name}</Link>
                            })
                        }

                       
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
