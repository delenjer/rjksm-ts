import React from 'react';
import { Link } from "react-router-dom";

import { IState } from "../../interface/interface";
import * as selectors from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { IArtCollections } from '../../interface/interface';
import { setFavorite } from '../../store/favoriteReducer/actions';

export const Favorite = () => {

  const getFavorite = useSelector((state:IState) => selectors.getFavorite(state));
  const artCollections = useSelector((state:IState) => selectors.getArtCollections(state));
  const { artObjects }: IArtCollections = artCollections;
  const dispatch = useDispatch();

  const handleDeleteFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
    e.preventDefault();

    dispatch(setFavorite([...getFavorite.filter((item: any) => item !== id)]));
  }

  console.log(getFavorite);

  return (
    <section className="favorite">
      <Link
        to="/"
        className="back favorite__back"
      >
        <span className="icon-point-left icon" />
        Back
      </Link>

      {
        artObjects && artObjects.filter(item => getFavorite.includes(item.objectNumber))
          .map(favorite => (
            <ul className="favorite__list" key={favorite.objectNumber}>
              <li className="favorite__item">
                <div className="favorite__header">
                  <h2 className="favorite__title">{favorite.title}</h2>
                  <button
                    className="favorite__btn"
                    type="button"
                    onClick={(e) =>
                      handleDeleteFavorite(e, favorite.objectNumber)}
                  >
                    <span className="icon-cross" />
                  </button>
                </div>

                <div className="favorite__container">
                  <img
                    className="favorite__container"
                    src={`${favorite.webImage.url}`}
                    alt={`${favorite.title}`}
                  />
                </div>
              </li>
            </ul>
          ))
      }
    </section>
  );
}
