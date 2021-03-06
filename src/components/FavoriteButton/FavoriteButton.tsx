import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import { setFavorite } from "../../store/favoriteReducer/actions";
import { setFavoriteItem } from "../../store/favoriteListReducer/actions";
import {IState} from "../../interface/interface";
import * as selectors from "../../store/store";

type propsFavoriteButton = {
  art: { objectNumber: string, };
  getFavorite: string[];
  artObjects: [
    {
      webImage: {url: string};
      objectNumber: string;
      title: string }
  ];
}

export const FavoriteButton: React.FC<propsFavoriteButton> = (
  { art,
    getFavorite,
    artObjects,
  }) => {
  const getFavoriteList = useSelector((state:IState) => selectors.getFavoriteList(state));
  const dispatch = useDispatch();

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();

    const hasLike = getFavorite.findIndex((item: string) => item === id);

    if (hasLike === -1) {
      dispatch(setFavorite([...getFavorite, id]));
    } else {
      dispatch(setFavorite([...getFavorite.filter((item: string) => item !== id)]));
    }

    const title = artObjects.filter((item) => item.objectNumber === id)
      .map((item: { title: string; }) => item.title);

    const url = artObjects.filter((item) => item.objectNumber === id)
      .map((item) => item.webImage.url);

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
