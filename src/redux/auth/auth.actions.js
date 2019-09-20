import { actionCreator } from '../../utils/generators';
import AuthActionTypes from './auth.types';

export const auth = authData => ({
  type: actionCreator('req', AuthActionTypes.AUTH_ACTION),
  payload: authData,
});

export const logout = () => ({
  type: actionCreator('req', AuthActionTypes.LOGOUT_ACTION),
});

export const resetPassword = resetPasswordData => ({
  type: actionCreator('req', AuthActionTypes.RESET_PASSWORD),
  payload: resetPasswordData,
});
