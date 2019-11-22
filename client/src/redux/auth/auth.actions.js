import axios from 'axios';
import { setAlert } from '../alert/alert.actions';
import { setAuthToken } from '../utils/setAuthToken';
import { 
  USER_LOADED, REGISTRATION_SUCCESS, REGISTRATION_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_USER, UPDATE_EMAIL, UPDATE_PASSWORD,UPDATE_SHIPPING, UPDATE_BILLING, CLEAR_ACCOUNT, DELETE_ACCOUNT, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM, ACCOUNT_ERROR, AUTH_ERROR, CART_ERROR,
} from './auth.types';

const route = 'http://localhost:5000';


/* ##############################################################################
########################## USER LOGIN / REGISTRATION ############################
################################################################################# */

// *************************** LOAD USER *************************** //
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  };

  try {
    const res = await axios.get(`${route}/api/users/current`);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    })
  };
};

// *************************** REGISTER USER *************************** //
export const registerUser = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(`${route}/api/users/register`, body, config);
    dispatch({
      type: REGISTRATION_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(
        setAlert(error.msg, 'danger')
      ));
    };
    dispatch({
      type: REGISTRATION_FAIL,
    });
  }
};

// *************************** LOGIN USER *************************** //
export const loginUser = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${route}/api/users/login`, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(
        setAlert(error.msg, 'danger', 2000)
      ))
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
}

// *************************** LOGOUT USER *************************** //
export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};


/* ##############################################################################
################################# USER ACCOUNT ##################################
################################################################################# */

// *************************** UPDATE EMAIL *************************** //
export const updateEmail = ({email}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  const body = JSON.stringify({email});

  if (window.confirm(`Confirm you would like to update email to ${email}`)) {
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
  }
};

// *************************** UPDATE PASSWORD *************************** //
export const updatePassword = ({ password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  const body = JSON.stringify({password});

  try {
    const res = await axios.patch(`${route}/api/users/password`, body, config);
    dispatch({
      type: UPDATE_PASSWORD,
      payload: res.data,
    });
    dispatch(setAlert('Password updated', 'success', 2000));
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      }
    });
    dispatch(setAlert('Error updating password', 'danger', 2000));
  }
};

// *************************** UPDATE SHIPPING ADDRESS *************************** //
export const updateShipping = (data) => async (dispatch) => {  
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const res = await axios.patch(`${route}/api/users/shipping_address`, data, config);
    dispatch({
      type: UPDATE_SHIPPING,
      payload: res.data,
    });
    dispatch(setAlert('Shipping Address updated successfully', 'success', 2000));
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      }
    });
    dispatch(setAlert('Error updating shipping address', 'danger', 2000));
  }
};

// *************************** UPDATE BILLING ADDRESS *************************** //
export const updateBilling = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.patch(`${route}/api/users/billing_address`, data, config);
    dispatch({
      type: UPDATE_BILLING,
      payload: res.data,
    });
    dispatch(setAlert('Billing Address updated successfully', 'success', 2000));
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      }
    });
    dispatch(setAlert('Error updating billing address', 'danger', 2000));
  }
};

/* ##############################################################################
################################### USER CART ###################################
################################################################################# */

// *************************** ADD (1) ITEM TO CART *************************** //
export const addItem = (item) => (dispatch) => {
  try {
    dispatch({
      type: ADD_ITEM,
      payload: item,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      }
    });
  };
};

// *************************** REMOVE (1) ITEM FROM CART *************************** //
export const removeItem = (item) => (dispatch) => {
  try {
    dispatch({
      type: REMOVE_ITEM,
      payload: item,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      }
    });
  };
};

// *************************** CLEAR ITEM TO CART *************************** //
export const clearItem = (item) => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_ITEM,
      payload: item,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      }
    });
  };
};