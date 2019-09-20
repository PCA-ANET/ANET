import { actionCreator } from '../../utils/generators';
import OperationsActionTypes from './operations.types';

const defaultState = {
  isLoading: false,
  error: null,
  operations: [],
};

const operationsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionCreator('req', OperationsActionTypes.GET_OPERATIONS):
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionCreator('res', OperationsActionTypes.GET_OPERATIONS):
      return {
        ...state,
        operations: action.payload.data,
        error: null,
        isLoading: false,
      };
    case actionCreator('fail', OperationsActionTypes.GET_OPERATIONS):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
      };
    default:
      return state;
  }
};
export default operationsReducer;
