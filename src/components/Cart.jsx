import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, updateQuantity, removeFromCart } from "../utils/cartSlice";
import { MdDelete } from "react-icons/md";

function Cart({ userId }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchCart(userId));
  }, [dispatch, userId]);

  return (
    <div className="p-4 mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-white">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.productId?._id}
              className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
            >
              {/* Product Image */}
              <div className="flex items-center space-x-4">
                <img
                  src={
                    item.productId?.photoUrl || "https://via.placeholder.com/80"
                  }
                  alt={item.productId?.name}
                  className="w-20 h-20 object-cover rounded-md border"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {item.productId?.name}
                  </p>
                  <p className="text-gray-600">Qty: {item.quantity}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        userId,
                        productId: item.productId?._id,
                        quantity: item.quantity - 1,
                      })
                    )
                  }
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        userId,
                        productId: item.productId?._id,
                        quantity: item.quantity + 1,
                      })
                    )
                  }
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                className="text-red-500 hover:text-red-700 font-medium cursor-pointer"
                onClick={() =>
                  dispatch(
                    removeFromCart({ userId, productId: item.productId?._id })
                  )
                }
              >
                <MdDelete className="text-3xl" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
