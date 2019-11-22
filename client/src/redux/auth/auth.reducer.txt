import { 
  USER_LOADED, REGISTRATION_SUCCESS, REGISTRATION_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_USER, UPDATE_EMAIL, UPDATE_PASSWORD,UPDATE_SHIPPING, UPDATE_BILLING, CLEAR_ACCOUNT, DELETE_ACCOUNT, ACCOUNT_ERROR, AUTH_ERROR, ADD_ITEM, REMOVE_ITEM,
} from './auth.types';

import { addItemToCart, removeItemFromCart } from './auth.utils';

const INTIAL_STATE = {
  token: localStorage.getItem('token'),
  isAdmin: false,
  isAuthenticated: false,
  loading: false,
  user: null,
};

export const authReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOADED :
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: action.payload,
        };
    case REGISTRATION_SUCCESS :
    case LOGIN_SUCCESS :
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case UPDATE_EMAIL :
    case UPDATE_SHIPPING :
    case UPDATE_BILLING :
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        }
      };
    case ADD_ITEM :
      return {
        ...state,
        user: {
          cart: addItemToCart(state.user.cart, action.payload),
        },
      };
    case REMOVE_ITEM :
      return {
        ...state,
        user: {
          cart: removeItemFromCart(state.user.cart, action.payload),
        },
      };
    case UPDATE_PASSWORD :
      return {
        ...state,
        ...action.payload,
      };
    case REGISTRATION_FAIL :
    case LOGIN_FAIL :
    case LOGOUT_USER :
    case AUTH_ERROR :
    case ACCOUNT_ERROR :
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isAdmin: false,
      }
    default:
      return state;
  };
};