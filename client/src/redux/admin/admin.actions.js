import axios from 'axios';
import { setAlert } from '../alert/alert.actions';
import { 
  GET_PRODUCTS, CREATE_PRODUCT, PRODUCT_ERROR, ADD_NEWSLETTER, REMOVE_NEWSLETTER,
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