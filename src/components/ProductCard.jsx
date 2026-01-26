import { Link } from "react-router-dom";
const ProductCard = ({ product, id }) => {
    return (
        <div className=" rounded-xl p-4 hover:shadow-lg transition">
            <Link to={`/productdetail/${id}`}>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-40 w-full object-cover rounded-md"
                />
            </Link>


            <h3 className="mt-3 text-sm font-semibold">
                {product.title}
            </h3>

            <p className="text-indigo-600 font-bold mt-1">
                ₹ {product.price}
            </p>

            <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg text-sm rounded-lg">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
