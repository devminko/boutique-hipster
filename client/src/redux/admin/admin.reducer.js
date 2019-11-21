import {
  GET_PRODUCTS, CREATE_PRODUCT, EDIT_PRODUCT, PRODUCT_ERROR, ADD_NEWSLETTER, REMOVE_NEWSLETTER, NEWSLETTER_ERROR,
} from './admin.types';

const INITIAL_STATE = {
  products: [],
  newsletter: ['johnson@gmail.com', 'johnson2@gmail.com'],
};

export const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS :
      return {
        ...state,
        products: action.payload,
      };
    case ADD_NEWSLETTER :
      return {
        ...state,
        newsletter: [...state.newsletter, action.payload],
      };
    case REMOVE_NEWSLETTER :
      return {
        ...state,
        newsletter: state.newsletter.filter(email => email !== action.payload)
      }
    case NEWSLETTER_ERROR :
      return {
        ...state,
      };
    default : 
      return state;
  };
};