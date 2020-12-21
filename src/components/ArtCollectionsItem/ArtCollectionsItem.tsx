import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { IState } from "../../interface/interface";
import * as selectors from "../../store/store";

import { Link } from 'react-router-dom';
import { setFavorite } from '../../store/favorite/actions';

type PropsArt = {
  art: {
    links: any,
    id: string,
    objectNumber: string,
    title: string,
    hasImage: boolean,
    principalOrFirstMaker: string,
    longTitle: string,
    showImage: boolean,
    permitDownload: boolean,
    webImage: {
      guid: string,
      offsetPercentageX: number,
      offsetPercentageY: number,
      width: number,
      height: number,
      url: string,
    },
    headerImage: {
      guid: string,
      offsetPercentageX: number,
      offsetPercentageY: number,
      width: number,
      height: number,
      url: string,
    },
    productionPlaces: any,
  },
};

export const ArtCollectionsItem: React.FC<PropsArt> = ({ art }) => {
  const [isLoading, setLoading] = useState(false);
  const highSrc = art.headerImage.url;

  const getFavorite = useSelector((state:IState) => selectors.getFavorite(state));

  const dispatch = useDispatch();

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
              Like
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
          <img src="./img/unnamed.png" alt="Loading Image"/>
        )
      }
    </>
  );
}
