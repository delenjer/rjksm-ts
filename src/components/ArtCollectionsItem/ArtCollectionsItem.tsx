import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";

import { Link } from 'react-router-dom';
import { IArt, IState, IArtObjects } from "../../interface/interface";
import { setFavorite } from "../../store/favoriteReducer/actions";
import { setFavoriteItem } from "../../store/favoriteListReducer/actions";
import { setActionModal } from "../../store/modalWindowReduser/actions";
import { LazyLoadingImg } from "../LazyLoadingImg/LazyLoadingImg";
import * as selectors from "../../store/store";
import { loadInfo } from '../../store/thunk/thunk';

export const ArtCollectionsItem: React.FC<IArt> = ({ art }) => {
  const [isLoadingImg, setLoadingImg] = useState(false);
  const highSrc = art.headerImage.url;
  const getFavorite = useSelector((state:IState) => selectors.getFavorite(state));
  const getFavoriteList = useSelector((state:IState) => selectors.getFavoriteList(state));
  const artCollections = useSelector((state:IState) => selectors.getArtCollections(state));
  const dispatch = useDispatch();
  const { artObjects } = artCollections;

  useEffect(() => {
    loadHighSrc(highSrc);
  }, [highSrc]);

  const loadHighSrc = (imageSrc: string) => {
    const lazyImage = new Image();

    lazyImage.onload = () => {
      setLoadingImg(true);
    };

    lazyImage.src = imageSrc;
  };

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();

    const hasLike = getFavorite.findIndex((item: string) => item === id);

    if (hasLike === -1) {
      dispatch(setFavorite([...getFavorite, id]));
    } else {
      dispatch(setFavorite([...getFavorite.filter((item: string) => item !== id)]));
    }

    const title = artObjects.filter((item: IArtObjects) => item.objectNumber === id)
      .map(item => item.title);

    const url = artObjects.filter((item: IArtObjects) => item.objectNumber === id)
      .map(item => item.webImage.url);

    const addNewFavorite = {
      id,
      title,
      url,
    };

    dispatch(setFavoriteItem([...getFavoriteList, addNewFavorite]));
  }

  const handleClickModal = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();

    dispatch(setActionModal(true));
    dispatch(loadInfo(id));
  }

  return (
    <>
      {
        isLoadingImg ? (
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
              to="/"
              className="collection__link"
              style={{ backgroundImage: `url(${highSrc})` }}
              onClick={(e) => handleClickModal(e, art.objectNumber)}
            >
              <p className="collection__text">{art.longTitle}</p>
            </Link>
          </article>
        ) : (
          <LazyLoadingImg />
        )
      }
    </>
  );
}
