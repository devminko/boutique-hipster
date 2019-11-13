import { 
  USER_LOADED, REGISTRATION_SUCCESS, REGISTRATION_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_USER, AUTH_ERROR 
} from './auth.types';

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
    case REGISTRATION_FAIL :
    case LOGIN_FAIL :
    case LOGOUT_USER :
    case AUTH_ERROR :
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