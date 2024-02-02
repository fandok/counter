import { ADD_COUNT_ALT } from "../redux/reducer/counterAlt";

export const addCountAlt = (val) => (dispatch) => {
  dispatch({
    type: ADD_COUNT_ALT,
    payload: val,
  });
};
