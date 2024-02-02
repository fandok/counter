export const ADD_COUNT_ALT = "counterAlt/add";

// variabel awal ketika bikin reducer
const initialState = {
  count: 0,
};

const counterAltReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT_ALT: {
      return {
        count: state.count + action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default counterAltReducer;
