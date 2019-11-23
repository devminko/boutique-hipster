import { TOGGLE_CART, CART_ERROR } from './cart.types';

// *************************** TOGGLE CART *************************** //
export const toggleCart = () => (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_CART,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
    });
  };
};