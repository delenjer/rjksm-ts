import { IActionSetCurrentPage, ILoadingArtItems } from '../../interface/interface';
import { SET_CURRENT_PAGE, SET_LOAD_ITEM, SET_KEY_WORD } from './actions';

const initialState = {
  pageSize: 10,
  totalPicturesCount: 10000,
  currentPage: 1,
  query: '',
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

    case SET_KEY_WORD:
      return {
        ...state,
        query: action.title,
      };

    default:
      return state;
  }
}

export default loadingArtItemsReducer;
