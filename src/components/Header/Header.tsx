import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from "../../interface/interface";
import * as selectors from "../../store/store";

export const Header = () => {
  //@ts-ignore
  const getFavorite = useSelector((state:IState) => selectors.getFavorite(state));

  console.log(getFavorite);

  return (
    <header className="header">
      <div className="header__wrap">
        <a href="/" className="header__logo">Museum</a>

        <a href="/" className="header__link">
          <span className="header__link--count">
            {getFavorite.length}
          </span>
        </a>
      </div>
    </header>
  );
};
