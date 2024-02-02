// tujuannya untuk menggabungkan beberapa reducers jadi 1
import { combineReducers } from "redux";

// reducer counter yang kita bikin
import counterReducer from "./counter";

const combinedReducers = combineReducers({
  counter: counterReducer,
});

export default combinedReducers;
