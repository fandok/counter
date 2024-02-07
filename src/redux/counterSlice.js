import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

// slice untuk bikin reducer, action, dan type sekaligus dalam satu fungsi
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state) => {
      state.count += 1;
    },
    multiply: (state) => {
      //   state.count *= 2; sama aja dengan dibawah
      state.count = state.count * 2;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// export actions yang akan dipakai di component
export const { add, multiply, reset } = counterSlice.actions;

// export reducer-nya ke file untuk gabungin reducers
export default counterSlice.reducer;
