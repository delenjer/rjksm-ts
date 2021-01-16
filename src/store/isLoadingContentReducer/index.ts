import { IActionIsLoading } from '../../interface/interface';
import { SET_LOADING_CONTENT } from './actions';

export const getIsLoadingContent = (state: boolean) => state;

const isLoadingContentReducer = (isLoadingContent = false, action:IActionIsLoading) => {
  switch (action.type) {
    case SET_LOADING_CONTENT:
      return action.isLoadingContent;

    default:
      return isLoadingContent;
  }
}

export default isLoadingContentReducer;
