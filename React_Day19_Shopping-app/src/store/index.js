import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import userReducer from "./slices/userSlice";
import languageReducer from "./slices/languageSlice";
import { productsApi } from "./api/productsApi";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    language: languageReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
