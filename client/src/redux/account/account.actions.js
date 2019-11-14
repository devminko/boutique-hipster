import axios from 'axios';
import { setAlert } from '../alert/alert.actions';
import { 
  GET_ACCOUNT, GET_ACCOUNTS, UPDATE_EMAIL, UPDATE_PASSWORD,UPDATE_SHIPPING, UPDATE_BILLING, CLEAR_ACCOUNT, DELETE_ACCOUNT, ACCOUNT_ERROR,
} from './account.types';

const route = 'http://localhost:5000';

// *************************** GET ACCOUNT *************************** //
export const getAccount = (userId) => async (dispatch) => {
  try {
    
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      }
    });
  }
};

// *************************** UPDATE EMAIL *************************** //
export const updateEmail = ({email}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  const body = JSON.stringify({email});

  try {
    const res = await axios.patch(`${route}/api/users/email`, body, config);
    dispatch({
      type: UPDATE_EMAIL,
      payload: res.data,
    });
    dispatch(setAlert('Email updated successfully', 'success', 2000));
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      }
    });
    dispatch(setAlert('Error updating email address', 'danger', 2000));
  }
};