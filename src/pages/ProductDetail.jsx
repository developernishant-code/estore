import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
    // ✅ STATIC DATA (same page)
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        }, [pathname])
    })
    const [product, setproduct] = useState({})
    const [related, setrelated] = useState([])

    const { id } = useParams()

    async function getdatabyid(id) {
        let response = await fetch(`https://dummyjson.com/products/${id}`)
        let data = await (response.json())
        setproduct(data)
    }
    useEffect(() => {
        if (id) {
            getdatabyid(id)
        }
    }, [id])

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${product.category}`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.products.filter(p => p.id !== product.id)
                setrelated(filtered.slice(0, 4))
            })
    }, [product.category, product.id])



    // 👈 static product

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-10">
                {/* Product Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Image */}
                    <div className="bg-gray-100 rounded-xl p-6 flex justify-center">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="max-h-[400px] object-contain"
                        />
                    </div>

                    {/* Details */}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold">
                            {product.title}
                        </h1>

                        <p className="text-sm text-gray-500 mt-1">
                            Brand: <span className="font-medium">{product.brand}</span>
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mt-3">
                            <span className="bg-green-600 text-white px-2 py-1 text-sm rounded">
                                ⭐ {product.rating}
                            </span>
                            <span className="text-sm text-gray-500">
                                ({product?.reviews?.length} Reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mt-4">
                            <span className="text-3xl font-bold text-indigo-600">
                                ₹ {product.price}
                            </span>
                            <span className="ml-3 text-green-600 text-sm">
                                {product.discountPercentage}% OFF
                            </span>
                        </div>

                        {/* Stock */}
                        <p className="mt-2 text-sm text-green-600">
                            {product.stock > 0 ? "In Stock" : "Out of Stock"}
                        </p>

                        {/* Description */}
                        <p className="mt-4 text-gray-700 text-sm">
                            {product.description}
                        </p>

                        {/* Extra Info */}
                        <div className="mt-6 space-y-2 text-sm">
                            <p><strong>Category:</strong> {product.category}</p>
                            <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
                            <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
                        </div>

                        <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Reviews */}
                <div className="mt-12">
                    <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>

                    <div className="space-y-4">
                        {product?.reviews?.map((review, index) => (
                            <div key={index} className="border rounded-lg p-4">
                                <p className="font-semibold">⭐ {review.rating} / 5</p>
                                <p className="text-sm text-gray-600">{review.comment}</p>
                                <p className="text-xs text-gray-400 mt-1">
                                    — {review.reviewerName}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr />
            <h1 className="text-center text-2xl font-bold">Related Products</h1>
            <div className="max-w-7xl relative mx-auto px-4 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {
                        related.map((product, index) => {
                            return (
                                <ProductCard key={product.id}
                                    id={product.id} product={product} />
                            )
                        })
                    }
                </div>
            </div>

        </>

    );
};

export default ProductDetail;
