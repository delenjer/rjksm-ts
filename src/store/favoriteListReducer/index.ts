import { IFavorite, IFavoriteList } from '../../interface/interface';
import { SET_FAVORITE_CONTENT } from './actions';

export const getFavoriteList = (state: IFavoriteList[]) => state;

const favoriteListReducer = (favoriteList: IFavoriteList[] = [], action:IFavorite) => {
  switch (action.type) {
    case SET_FAVORITE_CONTENT:
      return action.addNewFavorite;

    default:
      return favoriteList;
  }
}

export default favoriteListReducer;
