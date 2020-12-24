import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";

import { Link } from 'react-router-dom';
import { IArt, IState, IArtObjects } from "../../interface/interface";
import { setFavorite } from "../../store/favoriteReducer/actions";

//@ts-ignore
import { setFavoriteItem } from "../../store/favoriteListReducer/actions";
import * as selectors from "../../store/store";

export const ArtCollectionsItem: React.FC<IArt> = ({ art }) => {
  const [isLoading, setLoading] = useState(false);
  const highSrc = art.headerImage.url;
  const getFavorite = useSelector((state:IState) => selectors.getFavorite(state));
  const getFavoriteList = useSelector((state:IState) => selectors.getFavoriteList(state));
  const artCollections = useSelector((state:IState) => selectors.getArtCollections(state));
  const dispatch = useDispatch();

  const { artObjects } = artCollections;

  useEffect(() => {
    loadHighRes(highSrc);
  }, [highSrc]);

  const loadHighRes = (imageSrc: string) => {
    const image = new Image();

    image.onload = () => {
      setLoading(true);
    };

    image.src = imageSrc;
  };

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();

    const hasLike = getFavorite.findIndex((item: any) => item === id);

    if (hasLike === -1) {
      // @ts-ignore
      dispatch(setFavorite([...getFavorite, id]));
    } else {
      // @ts-ignore
      dispatch(setFavorite([...getFavorite.filter((item: any) => item !== id)]));
    }

    const title = artObjects.filter((item: IArtObjects) => item.objectNumber === id)
      .map(item => item.title);

    const url = artObjects.filter((item: IArtObjects) => item.objectNumber === id)
      .map(item => item.webImage.url);

    const favoriteItem = {
      id,
      title,
      url,
    };

    dispatch(setFavoriteItem([...getFavoriteList, favoriteItem]));
  }

  return (
    <>
      {
        isLoading ? (
          <article className="collection__item">
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

            <Link
              to={`/${art.objectNumber}/modal`}
              className="collection__link"
              style={{ backgroundImage: `url(${highSrc})` }}
            >
              <p className="collection__text">{art.longTitle}</p>
            </Link>
          </article>
        ) : (
          <img
            className="lazy-img"
            src="./img/unnamed.png"
            alt="Loading Image"
          />
        )
      }
    </>
  );
}
