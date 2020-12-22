import { IFavorite } from '../../interface/interface';
import { SET_FAVORITE } from './actions';

export const getFavorite = (state: any) => state;

const favoriteReducer = (favorite: any = [], action:IFavorite) => {
  switch (action.type) {
    case SET_FAVORITE:
      return action.id;

    default:
      return favorite;
  }
}

export default favoriteReducer;
