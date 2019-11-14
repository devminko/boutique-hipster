import { combineReducers } from 'redux';

import { accountReducer } from './account/account.reducer';
import { alertReducer } from './alert/alert.reducer';
import { authReducer } from './auth/auth.reducer';

export const rootReducer = combineReducers({
  account: accountReducer,
  alert: alertReducer,
  auth: authReducer,
});