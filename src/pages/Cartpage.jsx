import React, { useContext } from "react";
import { Storecontext } from "../Context";

const Cartpage = () => {
  const { cart, removeitem, qtyhandler } = useContext(Storecontext)
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT - CART ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold">Shopping Cart</h2>

          {/* Cart Item */}
          {
            cart.map((prod) => {
              return (
                <div key={prod.id} className="bg-white rounded-lg p-4 flex gap-4">

                  <img
                    src={prod.thumbnail}
                    alt=""
                    className="w-28 h-28 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">
                      {prod.title}
                    </h3>
                    <p className="text-sm text-gray-500">In Stock</p>

                    <div className="flex items-center gap-3 mt-3">
                      <button className="border px-3 py-1 rounded" onClick={() => qtyhandler(prod.id, "dec")}>-</button>
                      <span>{prod.qty}</span>
                      <button className="border px-3 py-1 rounded" onClick={() => qtyhandler(prod.id, "inc")}>+</button>
                    </div>

                    <button onClick={() => removeitem(prod.id)} className="text-red-500 text-sm mt-3">
                      Remove
                    </button>
                  </div>

                  <div className="text-lg font-semibold">
                    ₹{prod.price * prod.qty}
                  </div>
                </div>
              )

            })
          }


          {/* Duplicate item UI */}

        </div>

        {/* RIGHT - PRICE SUMMARY */}
        <div className="bg-white rounded-lg p-6 h-fit">
          <h3 className="text-xl font-semibold mb-4">Price Details</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Price ({totalItems} items)</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-600">FREE</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total Amount</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>

          <button
            disabled={cart.length === 0}
            className={`mt-6 w-full py-3 rounded font-semibold 
      ${cart.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-yellow-400 hover:bg-yellow-500"}`}
          >
            Place Order
          </button>
        </div>


      </div>
    </div>
  );
};

export default Cartpage;
