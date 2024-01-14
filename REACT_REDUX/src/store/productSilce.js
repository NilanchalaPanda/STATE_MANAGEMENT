import { createSlice } from "@reduxjs/toolkit";

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

  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.reqStatus = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// THUNKS ACTUAL USE WITHOUT RTK -
export function fetchProduct() {
  return async function fetchProductThunks(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const productData = await response.json();
      dispatch(setProducts(productData));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log("ERROR : ", error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
