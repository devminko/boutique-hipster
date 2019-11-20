import axios from 'axios';
import { setAlert } from '../alert/alert.actions';
import { 
  GET_PRODUCTS, CREATE_PRODUCT, EDIT_PRODUCT, PRODUCT_ERROR, ADD_NEWSLETTER, REMOVE_NEWSLETTER,
} from './admin.types';

const route = 'http://localhost:5000';

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
export const updateProduct = (product_id, data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.patch(`${route}/api/products/edit/${product_id}`, data, config);
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