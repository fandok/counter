// ini untuk bikin store
import { configureStore } from "@reduxjs/toolkit";

import combinedReducers from "./redux";

const store = configureStore({
  // punya 1 parameter wajib yaitu reducer-nya itu sendiri
  reducer: combinedReducers,
  // command buat munculin devtools atau ngga, biasanya true
  // devTools: false,
});

export default store;
