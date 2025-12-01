import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  favorites: [],
  filter: {
    category: "",
    priceRange: [0, 1000],
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity > 0 ? quantity : 1;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    addToFavorites: (state, action) => {
      const product = action.payload;
      const exists = state.favorites.find((item) => item.id === product.id);
      if (!exists) {
        state.favorites.push(product);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
  addToFavorites,
  removeFromFavorites,
  setFilter,
} = productsSlice.actions;

export default productsSlice.reducer;
