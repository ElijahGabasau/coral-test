import { STORE_FORM, POST_USER } from '../types/formTypes';

export const storeForm = (data) => {
  return {
    type: STORE_FORM,
    payload: data
  }
}

export const postUser = (data) => {
  return async function(dispatch) {

    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    dispatch({
      type: POST_USER,
      payload: response
    });
  }
}