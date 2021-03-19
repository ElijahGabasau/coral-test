import { POST_USER } from '../types/formTypes';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_USER:
      return { ...action.payload};
    default:
      return state;
  }
}