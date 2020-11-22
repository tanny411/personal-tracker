import { GET_ERRORS, CLEAR_ERRORS } from "./types";

// Return Errors
export const returnErrors = (errors, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { errors, status, id },
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
