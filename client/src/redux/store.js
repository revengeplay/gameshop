import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import ProductReducer from "./features/productSlice";
import CartReducer from "./features/cartSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    product: ProductReducer,
    cart: CartReducer,
  },
});
