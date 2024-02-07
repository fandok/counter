// tujuannya untuk menggabungkan beberapa reducers jadi 1
import { combineReducers } from "redux";

// reducer counter yang kita bikin
import counterReducer from "../counterSlice";
import counterAltReducer from "./counterAlt";

const combinedReducers = combineReducers({
  counter: counterReducer,
  counterAlt: counterAltReducer,
});

export default combinedReducers;
