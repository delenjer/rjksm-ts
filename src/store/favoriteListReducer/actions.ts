import { IFavoriteList } from '../../interface/interface';

export const SET_FAVORITE_CONTENT = 'SET_FAVORITE_CONTENT';

export const setFavoriteItem = (addNewFavorite: (IFavoriteList[])) => ({
  type: SET_FAVORITE_CONTENT,
  addNewFavorite,
});
