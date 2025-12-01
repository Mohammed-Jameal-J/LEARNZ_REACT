import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import userReducer from "./slices/userSlice";
import { productsApi } from "./api/productsApi";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
