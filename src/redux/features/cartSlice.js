import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    increaseProduct: (state) => {
      state.quantity += 1;
    },
    getCartTotal: (state) => {
      let { total, quantity } = state.products.reduce(
        (cartTotal, cartProduct) => {
          const { price, amount } = cartProduct;
          const itemTotal = price * amount;
          cartTotal.quantity += itemTotal;
          cartTotal.total += amount;
          return cartTotal;
        },
        { quantity: 0, total: 0 }
      );
      state.quantity = parseInt(quantity.toFixed(2));
      state.total = total;
    },
  },
});

export const { addProduct, getCartTotal, increaseProduct } = cartSlice.actions;
export default cartSlice.reducer;
