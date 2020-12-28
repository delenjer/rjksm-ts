import {IActionIsLoading} from '../../interface/interface';
import {SET_LOADING} from './actions';

export const getIsLoading = (state: boolean) => state;

const loadReducer = (isLoading = false, action:IActionIsLoading) => {
  switch (action.type) {
    case SET_LOADING:
      return action.isLoading;

    default:
      return isLoading;
  }
}

export default loadReducer;
