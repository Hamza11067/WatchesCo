import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
  clearCart,
} from "../utils/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h2 className="lg:text-2xl font-bold mb-4">Your Cart is Empty 🛒</h2>
        <Link
          to="/products"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto lg:p-6 p-4">
      <h2 className="lg:text-3xl text-2xl font-bold mb-6 text-center">
        Your Shopping Cart
      </h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.productId}
            className="sm:flex items-center justify-between pb-4 bg-slate-900 transition rounded-lg lg:p-3 px-3 py-2"
          >
            {/* Left section - Image and Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.photoUrl}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-xl border"
              />
              <div className="w-full">
                <h3 className="font-semibold md:text-lg">{item.name}</h3>
                <p className="text-gray-600 text-sm">Rs. {item.price}</p>

                <div className="flex items-center justify-end md:justify-start md:gap-3 mt-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.productId))}
                    className="w-8 h-8 sm:border rounded-md text-lg font-semibold hover:bg-gray-500 cursor-pointer"
                  >
                    −
                  </button>
                  <span className="min-w-[30px] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="w-8 h-8 sm:border rounded-md text-lg font-semibold hover:bg-gray-500 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Right section - Remove */}
            <div className="flex md:flex-col items-end justify-between">
              <button
                onClick={() => dispatch(removeFromCart(item.productId))}
                className="text-red-500 mt-2 hover:underline cursor-pointer"
              >
                Remove
              </button>
              <p className="font-semibold">Rs. {item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="mt-8 border-t pt-6 flex flex-col">
        <div className="text-right w-full">
          <p className="text-xl font-semibold">Total: Rs. {totalPrice}</p>
        </div>
        <div className="flex justify-between items-center mt-3">
          <button
            onClick={() => dispatch(clearCart())}
            className="px-4 py-2 rounded font-semibold bg-red-600 hover:bg-red-700 text-white transition cursor-pointer"
          >
            Clear
          </button>
          <button>
            <Link
              to="/checkout"
              className="inline-block bg-green-600 text-white lg:px-6 px-3 py-2 rounded-md hover:bg-green-700 transition"
            >
              Checkout →
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
