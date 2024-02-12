// tujuannya untuk menggabungkan beberapa reducers jadi 1
import { combineReducers } from "redux";

import counterAltReducer from "./counterAltSlice";
// reducer counter yang kita bikin
import counterReducer from "./counterSlice";

const combinedReducers = combineReducers({
  counter: counterReducer,
  counterAlt: counterAltReducer,
});

export default combinedReducers;
