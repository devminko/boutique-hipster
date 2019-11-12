import uuid from 'uuid/v4';
import { SET_ALERT, REMOVE_ALERT } from './alert.types';

// *************************** SET ALERT *************************** //
export const setAlert = (msg, alertType, timeout = 2000) => (dispatch) => {
  const id = uuid();

  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      alertType,
      id,
    }
  });

  // Removes SET_ALERT after designated timeout
  setTimeout(() => dispatch({
    type: REMOVE_ALERT,
    payload: id,
  }), timeout);
};