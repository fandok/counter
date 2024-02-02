// list aksi yang akan bisa dilakukan
export const ADD_COUNT = "counter/add";
export const MULTIPLY_COUNT = "counter/multiply";
export const RESET_COUNT = "counter/reset";

// variabel awal ketika bikin reducer
const initialState = {
  count: 0,
};

// fungsi reducer, dia menerima 2 parameter, yaitu state dan action
const counterReducer = (state = initialState, action) => {
  // action type untuk tau aksi mana yang dilakukan
  switch (action.type) {
    case ADD_COUNT: {
      return {
        count: state.count + 1,
      };
    }
    case MULTIPLY_COUNT: {
      return {
        count: state.count * 2,
      };
    }
    case RESET_COUNT: {
      return {
        count: 0,
      };
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
