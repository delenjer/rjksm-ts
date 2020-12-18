import React from 'react';
import { useSelector } from "react-redux";

import *as selectors from '../../store/store';
import { IState } from "../../interface/interface";

export const Header = () => {
  // @ts-ignore
  const getFavorite = useSelector((state:IState) => selectors.getFavorite(state));

  return (
    <header className="header">
      <div className="header__wrap">
        <a href="/"
           className="header__logo"
        >
          Rijksmuseum
        </a>

        <a
          href="/"
          className="header__link"
        >
          <span
            className="header__link--count"
          >
            {/*{getFavorite.length}*/}
          </span>
        </a>
      </div>
    </header>
  );
};
