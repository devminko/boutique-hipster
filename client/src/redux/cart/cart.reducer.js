import { TOGGLE_CART, CART_ERROR } from './cart.types';

const INITIAL_STATE = {
  toggleCart: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART :
      return {
        ...state,
        toggleCart: !state.toggleCart,
      };
    case CART_ERROR :
      return {
        ...state,
        toggleCart: false,
      };
    default :
      return state;
  };
};
