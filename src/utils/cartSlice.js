import { createSlice } from "@reduxjs/toolkit";

// ---- Helpers ----
const loadCartFromLocalStorage = () => {
  try {
    const stored = localStorage.getItem("cart");
    if (!stored) {
      return { cartItems: [], totalQuantity: 0, totalPrice: 0 };
    }

    const parsed = JSON.parse(stored);

    // Recalculate totals safely
    const totalQuantity = parsed.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = parsed.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return { cartItems: parsed, totalQuantity, totalPrice };
  } catch (error) {
    console.error("Error loading cart from localStorage", error);
    return { cartItems: [], totalQuantity: 0, totalPrice: 0 };
  }
};

const saveCartToLocalStorage = (cartItems) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Error saving cart to localStorage", error);
  }
};

// ---- Initial State ----
const initialState = loadCartFromLocalStorage();

// ---- Slice ----
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find(
        (i) => i.productId === item.productId
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalQuantity = state.cartItems.reduce(
        (sum, i) => sum + i.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );

      saveCartToLocalStorage(state.cartItems);
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(
        (i) => i.productId !== productId
      );

      state.totalQuantity = state.cartItems.reduce(
        (sum, i) => sum + i.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );

      saveCartToLocalStorage(state.cartItems);
    },

    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const existing = state.cartItems.find((i) => i.productId === productId);

      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (i) => i.productId !== productId
        );
      }

      state.totalQuantity = state.cartItems.reduce(
        (sum, i) => sum + i.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );

      saveCartToLocalStorage(state.cartItems);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      saveCartToLocalStorage([]);
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
