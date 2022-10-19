import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createProduct = createAsyncThunk(
  "tour/createProduct",
  async ({ updatedProductData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createProduct(updatedProductData);
      toast.success("등록 성공");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// export const getProducts = createAsyncThunk(
//   "tour/getProducts",
//   async (page, { rejectWithValue }) => {
//     try {
//       const response = await api.getProducts(page);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    products: [],
    tagProducts: [],
    currentPage: 1,
    numberOfPages: null,
    error: "",
    loading: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [createProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.tours = [action.payload];
    },
    [createProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setCurrentPage } = productSlice.actions;

export default productSlice.reducer;
