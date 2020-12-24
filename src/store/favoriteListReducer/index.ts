import { IFavorite, IFavoriteItem } from '../../interface/interface';
import { SET_FAVORITE_CONTENT } from './actions';

export const getFavoriteList = (state: any) => state;

// type Props = {
//   id: string,
//   title: string,
//   url: string,
// }

const favoriteListReducer = (favoriteList: IFavoriteItem[] = [], action:IFavorite) => {
  switch (action.type) {
    case SET_FAVORITE_CONTENT:
      return action.favoriteItems;

    default:
      return favoriteList;
  }
}

export default favoriteListReducer;
