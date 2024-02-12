import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterAltSlice = createSlice({
  name: "counterAlt",
  initialState,
  reducers: {
    add: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { add } = counterAltSlice.actions;

export default counterAltSlice.reducer;
