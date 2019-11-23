import axios from 'axios';
import { setAlert } from '../alert/alert.actions';
import { 
 GET_USERS, USERS_ERROR, GET_PRODUCTS, CREATE_PRODUCT, EDIT_PRODUCT, PRODUCT_ERROR, ADD_NEWSLETTER, REMOVE_NEWSLETTER, NEWSLETTER_ERROR,
} from './admin.types';

const route = 'http://localhost:5000';

// *************************** GET ALL USERS *************************** //
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`${route}/api/users`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      }
    });
  };
};

// *************************** GET ALL PRODUCTS *************************** //
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${route}/api/products`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      }
    });
  }
};

// *************************** CREATE PRODUCT *************************** //
export const createProduct = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify(formData);

    const res = await axios.post(`${route}/api/products/create`, body, config);

    dispatch({
      type: CREATE_PRODUCT,
      payload: res.data,
    });
    dispatch(setAlert('Product added to database successfully', 'success', 2000));
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      }
    });
    dispatch(setAlert('Error adding product to database', 'danger', 2000));
  }
};

// *************************** UPDATE PRODUCT *************************** //
export const updateProduct = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify(formData);

    const res = await axios.patch(`${route}/api/products/edit/${id}`, body, config);
    dispatch({
      type: EDIT_PRODUCT,
      payload: res.data,
    });
    dispatch(setAlert('Product details updated successfully', 'success', 2000 ));
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      }
    });
    dispatch(setAlert('Error updating product details', 'danger', 2000));
  };
};

// *************************** ADD EMAIL TO NEWSLETTER *************************** //
export const addEmailToNewsletter = (email) => (dispatch) => {
  try {
    if (email.includes('@')) {
      dispatch({
        type: ADD_NEWSLETTER,
        payload: email,
      });
      dispatch(setAlert('Subscribed to Newsletter', 'success', 2000));
    };
  } catch (err) {
    dispatch({
      type: NEWSLETTER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      }
    });
    dispatch(setAlert('Error adding email address', 'danger', 2000))
  };
};

// *************************** REMOVE EMAIL FROM NEWSLETTER *************************** //
export const removeEmailFromNewsletter = (email) => (dispatch) => {
  try {
    dispatch({
      type: REMOVE_NEWSLETTER,
      payload: email,
    });
    // dispatch(setAlert('Email successfully removed from newsletter list', 'success', 2000));
  } catch (err) {
    dispatch({
      type: NEWSLETTER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      }
    });
    dispatch(setAlert('Error removing email from newsletter list', 'danger', 2000));
  };
};