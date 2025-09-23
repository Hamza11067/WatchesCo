import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCart,
  addToCart,
  updateQuantity,
  removeFromCart,
} from "../utils/cartSlice";

function Cart({ userId }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchCart(userId));
  }, [dispatch, userId]);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.productId._id}>
          <p>
            {item.productId.name} - {item.quantity}
          </p>
          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  userId,
                  productId: item.productId._id,
                  quantity: item.quantity + 1,
                })
              )
            }
          >
            +
          </button>
          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  userId,
                  productId: item.productId._id,
                  quantity: item.quantity - 1,
                })
              )
            }
          >
            -
          </button>
          <button
            onClick={() =>
              dispatch(
                removeFromCart({ userId, productId: item.productId._id })
              )
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
