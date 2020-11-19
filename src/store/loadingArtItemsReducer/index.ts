import { IActionSetCurrentPage, ILoadingArtItems } from '../../interface/interface';
import { SET_CURRENT_PAGE, SET_LOAD_ITEM } from './actions';

const initialState = {
  pageSize: 10,
  totalPicturesCount: 10000,
  currentPage: 1,
};

export const getLoadingArtItems = (state: ILoadingArtItems) => state;

const loadingArtItemsReducer = (state = initialState, action:IActionSetCurrentPage) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.num,
      };

    case SET_LOAD_ITEM:
      return {
        ...state,
        pageSize: action.num,
      };

    default:
      return state;
  }
}

export default loadingArtItemsReducer;
