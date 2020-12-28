import { IErrorMessage } from '../../interface/interface';
import { SET_ERROR } from './actions';

export const getError = (state: boolean) => state;

const errorMessageReducer = (isError = false, action:IErrorMessage) => {
  switch (action.type) {
    case  SET_ERROR:
      return action.isError;

    default:
      return isError;
  }
}

export default errorMessageReducer;
