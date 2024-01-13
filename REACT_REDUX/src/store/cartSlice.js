import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,

  // Basically a function to mutate the state -
  // These are pure function, i.e. there are no side-effects (Data outside state is not altered)
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    // ID will be passed as a parameter -
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
