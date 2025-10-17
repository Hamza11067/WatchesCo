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
      <h2 className="lg:text-3xl text-2xl font-bold mb-6 text-center">Your Shopping Cart</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.productId}
            className="flex items-center justify-between pb-4 bg-slate-800 transition rounded-lg lg:p-3 p-2"
          >
            {/* Left section - Image and Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.photoUrl}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-xl border"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600 text-sm">Rs. {item.price}</p>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.productId))}
                    className="w-8 h-8 border rounded-md text-lg font-semibold hover:bg-gray-500 cursor-pointer"
                  >
                    −
                  </button>
                  <span className="min-w-[30px] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="w-8 h-8 border rounded-md text-lg font-semibold hover:bg-gray-500 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Right section - Remove */}
            <div className="flex flex-col items-end">
              <p className="font-semibold">Rs. {item.price * item.quantity}</p>
              <button
                onClick={() => dispatch(removeFromCart(item.productId))}
                className="text-red-500 mt-2 hover:underline cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="mt-8 border-t pt-6 flex justify-between items-center">
        <div>
          <button
            onClick={() => dispatch(clearCart())}
            className="px-4 py-2 rounded font-semibold bg-red-600 hover:bg-red-700 text-white transition cursor-pointer"
          >
            Clear Cart
          </button>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold">Total: Rs. {totalPrice}</p>
          <Link
            to="/checkout"
            className="inline-block bg-green-600 text-white lg:px-6 px-3 py-2 mt-3 rounded-md hover:bg-green-700 transition"
          >
            Proceed to Checkout →
          </Link>
        </div>
      </div>
    </div>
  );
}
