import { IFavoriteItem } from '../../interface/interface';

export const SET_FAVORITE_CONTENT = 'SET_FAVORITE_CONTENT';

export const setFavoriteItem = (favoriteItems: IFavoriteItem[]) => ({
  type: SET_FAVORITE_CONTENT,
  favoriteItems,
});
