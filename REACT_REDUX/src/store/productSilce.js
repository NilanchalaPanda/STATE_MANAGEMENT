import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  /// List of Products -
  data: [],
  reqStatus: STATUSES.IDLE,
};

const productSlice = createSlice({
  name: "product",
  initialState,

  /// <--- This is commented becasue of new implemetation of the Thunks using "createAysncThunk" ---> ///
  // reducers: {
  //   setProducts(state, action) {
  //     state.data = action.payload;
  //   },
  //   setStatus(state, action) {
  //     state.reqStatus = action.payload;
  //   },
  // },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.reqStatus = STATUSES.LOADING;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.reqStatus = STATUSES.IDLE;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.reqStatus = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// RTK WAY TO HANDLE THUNKS :
export const fetchProduct = createAsyncThunk("product/fetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const productData = await response.json();
  return productData;
});

// THUNKS ACTUAL USE WITHOUT RTK -
// export function fetchProduct() {
//   return async function fetchProductThunks(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const productData = await response.json();
//       dispatch(setProducts(productData));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (error) {
//       console.log("ERROR : ", error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
