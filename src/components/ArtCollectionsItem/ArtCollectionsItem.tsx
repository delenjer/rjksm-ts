import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";

import *as selectors from '../../store/store';
import { IState } from "../../interface/interface";

// @ts-ignore
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
  const [isAddFavorite, setAddFavorite] = useState(false);

  // @ts-ignore
  const getFavorite = useSelector((state:IState) => selectors.getFavorite(state));

  // const helper = () => {
  //
  // }
  //
  const handleFavorite = (id: string): void => {
    console.log(id);

    dispatch(setFavorite(id));
  }


  const highSrc = art.headerImage.url;
  // @ts-ignore
  const dispatch = useDispatch();

  useEffect(() => {
    loadHighRes(highSrc);
  }, []);

  const loadHighRes = (imageSrc: string) => {
    const image = new Image();

    image.onload = () => {
      setLoading(true);
    };

    image.src = imageSrc;
  };

  return (
    <>
      {
        isLoading ? (
          <article className="collection__item">
            <button
              type="button"
              className={isAddFavorite ? 'btn-favorite active-favorite' : 'btn-favorite'}
              onClick={() => {
                handleFavorite(art.objectNumber);
                setAddFavorite(!isAddFavorite);
              }}
            >
              <span className="icon-heart" />
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
