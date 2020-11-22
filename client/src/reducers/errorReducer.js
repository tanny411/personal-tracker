import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types.js";

const initialState = {
  errors: {},
  status: null,
  id: null,
};

function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        errors: action.payload.errors, // we get an object of all errors
        status: action.payload.status,
        id: action.payload.id,
      };
    case CLEAR_ERRORS:
      return {
        errors: {},
        status: null,
        id: null,
      };
    default:
      return state;
  }
}

export default errorReducer;
