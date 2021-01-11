import { IActionSetCurrentPage, ILoadingArtItems } from '../../interface/interface';
import { SET_CURRENT_PAGE, SET_LOAD_ITEM, SET_KEY_WORD, SET_SELECT_VALUE } from './actions';

const initialState = {
  pageSize: 10,
  totalPicturesCount: 10000,
  currentPage: 1,
  query: '',
  selectValue: '',
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

    case SET_SELECT_VALUE:
      return {
        ...state,
        selectValue: action.value,
      };

    default:
      return state;
  }
}

export default loadingArtItemsReducer;
