const initialState = [];

const addInfoReducer = (state = initialState, action) => {
  if (action.type === 'add_info') {
    return action.payload.val;
  } else {
    return state;
  }
};

export default addInfoReducer;
