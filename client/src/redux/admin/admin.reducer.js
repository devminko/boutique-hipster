import {
  GET_PRODUCTS, CREATE_PRODUCT, EDIT_PRODUCT, PRODUCT_ERROR, ADD_NEWSLETTER, REMOVE_NEWSLETTER,
} from './admin.types';

const INITIAL_STATE = {
  products: [],
  newsletter: [],
};

export const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS :
      return {
        ...state,
        products: action.payload,
      };
    default : 
      return state;
  }
};