// ini untuk bikin store
import { configureStore } from "@reduxjs/toolkit";

import combinedReducers from "./redux/reducer";

const store = configureStore({
  // punya 1 parameter wajib yaitu reducer-nya itu sendiri
  reducer: combinedReducers,
});

export default store;
