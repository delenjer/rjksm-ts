import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import { IState } from "../../interface/interface";
import * as selectors from "../../store/store";

export const Header = () => {
  const getFavorite = useSelector((state:IState) => selectors.getFavorite(state));

  return (
    <header className="header">
      <div className="header__wrap">
        <Link to="/" className="header__logo">Museum</Link>

        <Link to="/favorite" className="header__link">
          <span className="header__link--count">
            {getFavorite.length}
          </span>
        </Link>
      </div>
    </header>
  );
};
