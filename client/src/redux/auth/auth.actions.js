import axios from 'axios';
import { REGISTRATION_SUCCESS, REGISTRATION_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR } from './auth.types';

// *************************** REGISTER USER *************************** //
export const registerUser = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  const body = JSON.stringify({ name, email, password });

  const res = await axios.post(`http://localhost:5000/api/users/register`, body, config);
  try {
    dispatch({
      type: REGISTRATION_SUCCESS,
      payload: res.data,
    });
    console.log('REGISTRATION SUCCESSFUL');
  } catch (err) {
    console.error(err.message);
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(
        console.log(error.msg, 'danger')
      ));
    };
    dispatch({
      type: REGISTRATION_FAIL,
    });
    console.log('REGISTRATION FAIL');
  }
};