import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Link } from 'react-router-dom';
import { IArt, IState } from "../../interface/interface";
import { setActionModal } from "../../store/modalWindowReduser/actions";
import { LazyLoadingImg } from "../LazyLoadingImg/LazyLoadingImg";
import * as selectors from "../../store/store";
import { loadInfo } from '../../store/thunk/thunk';
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

export const ArtCollectionsItem: React.FC<IArt> = ({ art }) => {
  const [isLoadingImg, setLoadingImg] = useState(false);
  const highSrc = art.headerImage.url;
  const getFavorite = useSelector((state:IState) => selectors.getFavorite(state));
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
            <FavoriteButton
              artObjects={artObjects}
              getFavorite={getFavorite}
              art={art}
            />

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
