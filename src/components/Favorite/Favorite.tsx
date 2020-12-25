import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import { IState } from "../../interface/interface";
import * as selectors from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { setFavorite } from '../../store/favoriteReducer/actions';
import { setFavoriteItem } from '../../store/favoriteListReducer/actions';

export const Favorite = () => {
  const getFavorite = useSelector((state:IState) => selectors.getFavorite(state));
  const getFavoriteList = useSelector((state:IState) => selectors.getFavoriteList(state));
  const dispatch = useDispatch();

  //@ts-ignore
  const handleDeleteFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
    e.preventDefault();

    dispatch(setFavorite([...getFavorite.filter((item: any) => item !== id)]));
  }

  useEffect(() => {
    dispatch(
      setFavoriteItem(
        [...getFavoriteList.filter((item: any) => getFavorite.includes(item.id))
        ])
    );
  }, []);

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
        getFavoriteList.filter((item: any)=> getFavorite.includes(item.id))
          .map((item: any) => (
           <ul className="favorite__list" key={item.id}>
              <li className="favorite__item">
              <div className="favorite__header">
                <h2 className="favorite__title">{item.title}</h2>
              </div>

              <div className="favorite__container">
                <img
                  className="favorite__container"
                  src={`${item.url}`}
                  alt={`${item.title}`}
                />
              </div>
            </li>
           </ul>
        ))
      }
    </section>
  );
}
