import { 
  GET_ACCOUNT, GET_ACCOUNTS, UPDATE_EMAIL, UPDATE_PASSWORD,UPDATE_SHIPPING, UPDATE_BILLING, CLEAR_ACCOUNT, DELETE_ACCOUNT, ACCOUNT_ERROR,
} from './account.types';

const INITIAL_STATE = {
  currentAccount: null,
  loading: false,
  error: {},
};

export const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_EMAIL :
      return {
        ...state,
        currentAccount: {
          ...state.currentAccount,
          email: action.payload,
        },
      };
    case ACCOUNT_ERROR :
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default :
      return state;
  }
};