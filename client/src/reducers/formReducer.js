import { STORE_FORM } from '../types/formTypes';

export const formReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_FORM:
      return { ...state, ...action.payload};
    default:
      return state;
  }
}