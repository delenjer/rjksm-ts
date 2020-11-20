import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <Link
            to={`/${art.objectNumber}/modal`}
            className="collection__item"
            style={{ backgroundImage: `url(${highSrc})` }}
          >
            <p className="collection__text">{art.longTitle}</p>
          </Link>
        ) : (
          <img src="./img/unnamed.png" alt="Loading Image"/>
        )
      }
    </>
  );
}
