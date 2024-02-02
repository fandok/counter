import {
  ADD_COUNT,
  MULTIPLY_COUNT,
  RESET_COUNT,
} from "../redux/reducer/counter";

// menyambungkan dari view ke action
export const addCount = () => (dispatch) => {
  dispatch({
    type: ADD_COUNT,
  });
};

export const multiplyCount = () => (dispatch) => {
  dispatch({
    type: MULTIPLY_COUNT,
  });
};

export const resetCount = () => (dispatch) => {
  dispatch({
    type: RESET_COUNT,
  });
};
