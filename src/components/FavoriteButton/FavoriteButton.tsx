import React from 'react';
import { useDispatch } from "react-redux";

import { setFavorite } from "../../store/favoriteReducer/actions";
import { IArtObjects } from "../../interface/interface";
import { setFavoriteItem } from "../../store/favoriteListReducer/actions";

type propsFavoriteButton = {
  handleFavoriteClick(e: React.MouseEvent<HTMLButtonElement>, id: string): void;
  art: { objectNumber: string, };
  getFavorite: string[];
  getFavoriteList: [];
}

// @ts-ignore
export const FavoriteButton: React.FC<propsFavoriteButton> = ({ art, getFavorite, artObjects, getFavoriteList }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();

    const hasLike = getFavorite.findIndex((item: string) => item === id);

    if (hasLike === -1) {
      dispatch(setFavorite([...getFavorite, id]));
    } else {
      dispatch(setFavorite([...getFavorite.filter((item: string) => item !== id)]));
    }

    const title = artObjects.filter((item: IArtObjects) => item.objectNumber === id)
      // @ts-ignore
      .map(item => item.title);

    const url = artObjects.filter((item: IArtObjects) => item.objectNumber === id)
      // @ts-ignore
      .map(item => item.webImage.url);

    const addNewFavorite = {
      id,
      title,
      url,
    };

    dispatch(setFavoriteItem([...getFavoriteList, addNewFavorite]));
  }

  return (
    <button
      className="favorite-btn"
      onClick={(e) =>
        handleFavoriteClick(e, art.objectNumber)
      }
    >
      {
        getFavorite.includes(art.objectNumber) ? (
          <span className="icon-heart active-favorite" />
        ) : (
          <span className="icon-heart" />
        )
      }
    </button>
  );
};
