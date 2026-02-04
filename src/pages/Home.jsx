import React, { useState } from 'react'
import Banner from '../assetss/Banner.jpeg'
import Airpods from '../assetss/Airpods.jpeg'
import Brands from '../components/Brands'
import SaleTimer from '../components/Saletimer'
import useProducts from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import HomeSkeleton from '../Skeletons/HomeSkeleton'

export default function Home() {
    const laptopBrands = [
        { id: 1, name: "Apple", logo: "https://cdn.simpleicons.org/apple" },
        { id: 2, name: "Dell", logo: "https://cdn.simpleicons.org/dell" },
        { id: 3, name: "HP", logo: "https://cdn.simpleicons.org/hp" },
        { id: 4, name: "Lenovo", logo: "https://cdn.simpleicons.org/lenovo" },
        { id: 5, name: "Asus", logo: "https://cdn.simpleicons.org/asus" },
        { id: 6, name: "Acer", logo: "https://cdn.simpleicons.org/acer" },
        { id: 7, name: "MSI", logo: "https://cdn.simpleicons.org/msi" },
        { id: 8, name: "Samsung", logo: "https://cdn.simpleicons.org/samsung" },
        { id: 9, name: "Toshiba", logo: "https://cdn.simpleicons.org/toshiba" },
        { id: 10, name: "Razer", logo: "https://cdn.simpleicons.org/razer" },
        { id: 11, name: "Huawei", logo: "https://cdn.simpleicons.org/huawei" },
        { id: 12, name: "LG", logo: "https://cdn.simpleicons.org/lg" },
    ]

    const categories = [
        {
            id: 1,
            name: "Laptops",
            image: "https://rog.asus.com/media/1555580873182.jpg",
        },
        {
            id: 2,
            name: "PC",
            image: "https://m.media-amazon.com/images/I/91Y39x9PnPL._UL_1000_.jpg",
        },
        {
            id: 3,
            name: "Headphones",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTP3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671182",
        },
        {
            id: 4,
            name: "Monitors",
            image: "https://tse2.mm.bing.net/th/id/OIP.9dyks2qJ4aIJNUJIlXPGHgHaE8",
        },
    ]

    const { products, loading } = useProducts();

    if (loading) return <HomeSkeleton />


    return (
        <>
            {/* Banner */}
            <img
                src={Banner}
                alt="Banner"
                className="w-full max-w-[1550px] mx-auto object-cover
                           h-[250px] sm:h-[400px] md:h-[550px]"
            />

            <div className="max-w-7xl mx-auto px-4">
                <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Featured Brands */}
                    <div className="bg-white p-4 rounded">
                        <h2 className="uppercase font-bold text-xl pb-3">
                            Featured Brands
                        </h2>

                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                            {laptopBrands.map((data) => (
                                <Brands key={data.id} image={data.logo} />
                            ))}
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="bg-white p-4 rounded">
                        <h2 className="uppercase font-bold text-xl pb-3">
                            Top Categories
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {categories.map((cat) => (
                                <div
                                    key={cat.id}
                                    className="flex flex-col items-center text-center"
                                >
                                    <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={cat.image}
                                            alt={cat.name}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                    <p className="mt-3 font-medium">
                                        {cat.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className='max-w-7xl mx-auto'>
                <div className="max-w-7xl mx-auto px-4 my-10">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">

                        {/* LEFT: Deal Card */}
                        <div className="lg:col-span-4 space-y-4">

                            {/* Header */}
                            <div className="bg-teal-500 rounded-2xl p-4">
                                <p className="font-bold text-white text-lg">
                                    Deal of the Day
                                </p>
                            </div>

                            {/* Product Card */}
                            <div className="bg-white rounded-2xl p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

                                {/* Image */}
                                <div className="lg:col-span-5 flex justify-center">
                                    <img
                                        src="https://m.media-amazon.com/images/I/61D3EdXKG5L._SL1500_.jpg"
                                        alt="product"
                                        className="max-h-[300px] sm:max-h-[380px] object-contain"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="lg:col-span-5 space-y-4">
                                    <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
                                        Samsung Galaxy S25 5G Smartphone with Galaxy AI
                                    </h2>

                                    <p className="text-blue-600 text-sm cursor-pointer">
                                        Visit the Samsung Store
                                    </p>

                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-yellow-500">★★★★☆</span>
                                        <span className="text-blue-600">(704)</span>
                                    </div>

                                    <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded">
                                        Republic Day Deal
                                    </span>

                                    <div>
                                        <p className="text-red-600 text-sm font-medium">-7%</p>
                                        <p className="text-2xl sm:text-3xl font-bold">₹74,999</p>
                                        <p className="text-sm text-gray-500">
                                            M.R.P.: <span className="line-through">₹80,999</span>
                                        </p>
                                    </div>

                                    <p className="text-sm text-gray-600">
                                        Inclusive of all taxes
                                    </p>

                                    <p className="text-sm">
                                        EMI starts at <strong>₹2,637</strong>. No Cost EMI available
                                    </p>

                                    <div className="grid grid-cols-2 gap-3">
                                        {["No Cost EMI", "Bank Offer", "Cashback", "Partner Offer"].map(
                                            (offer, i) => (
                                                <div
                                                    key={i}
                                                    className="border rounded-md p-3 text-xs sm:text-sm hover:shadow cursor-pointer"
                                                >
                                                    <p className="font-medium">{offer}</p>
                                                    <p className="text-gray-600 text-xs mt-1">
                                                        View details
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Buy Box */}
                                <div className="lg:col-span-2 border rounded-xl p-4 space-y-3 h-fit">
                                    <p className="text-xl font-bold">₹74,999</p>
                                    <p className="text-green-600 text-sm font-medium">In stock</p>

                                    <p className="text-sm">
                                        FREE delivery <strong>Wednesday</strong>
                                    </p>

                                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-medium">
                                        Add to Cart
                                    </button>

                                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium">
                                        Buy Now
                                    </button>

                                    <p className="text-xs text-gray-600">
                                        Secure transaction
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Side Banners (Desktop only) */}
                        <div className="hidden lg:flex lg:col-span-2 flex-col gap-4">
                            <img
                                src="https://i.pinimg.com/1200x/45/28/01/4528010d5b1c56482dfa78171a4a249f.jpg"
                                className="rounded-2xl"
                                alt=""
                            />
                            <img
                                src="https://i.pinimg.com/1200x/0b/70/d3/0b70d3068c730905fd9811f4dfb6efe4.jpg"
                                className="rounded-2xl"
                                alt=""
                            />
                        </div>

                    </div>
                </div>

            </div>
            <div className='max-w-[1600px] py-4 mx-auto'>
                <SaleTimer />
            </div>

            <img className='w-full h-[250px]  object-cover' src={Airpods} alt="" />

            <div className="max-w-7xl relative mx-auto px-4 py-10">
                <div className='flex items-center'>
                    <h2 className="text-2xl font-bold mb-6">
                        🔥 Featured Products
                    </h2>
                    <Link to={"/products"}>
                        <h5 className='absolute right-0 cursor-pointer'>View More</h5>
                    </Link>
                    
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.slice(0, 4).map((product) => (
                        <ProductCard key={product.id} id={product.id} product={product} />
                    ))}
                </div>
            </div>


        </>
    )
}
