import { actionCreator } from '../../utils/generators';
import OperationsActionTypes from './operations.types';

export const getOperations = () => ({
  type: actionCreator('req', OperationsActionTypes.GET_OPERATIONS),
});
