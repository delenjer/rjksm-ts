import { IActionInfo } from '../../interface/interface';
import { SET_FAVORITE } from './actions';

export const getFavorite = (state: any) => state;

const favoriteReducer = (isFavorite = [], action:IActionInfo) => {
  switch (action.type) {
    case SET_FAVORITE:
      return [
        ...isFavorite,
        action.id,
      ];

    default:
      return isFavorite;
  }
}

export default favoriteReducer;
