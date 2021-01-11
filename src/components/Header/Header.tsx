import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { IState } from "../../interface/interface";
import * as selectors from "../../store/store";
import { setSearch, setSelectValue } from '../../store/loadingArtItemsReducer/actions';
import { ResultSearchOrSort } from '../ResultSearchOrSort/ResultSearchOrSort';

export const Header = () => {
  const [isQuery, setQuery] = useState('');
  const getFavorite = useSelector((state:IState) => selectors.getFavorite(state));
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setSearch(isQuery));
    setQuery('');
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectValue(e.target.value));
  }

  return (
    <header className="header">
      <div className="header__wrap">
        <Link to="/" className="header__logo">Rijksmuseum</Link>

        <ResultSearchOrSort
          handleSubmit={handleSubmit}
          handleSelect={handleSelect}
          setQuery={setQuery}
          isQuery={isQuery}
        />

        <Link to="/favorite" className="header__link">
          <span className="header__link--count">
            {getFavorite.length}
          </span>
        </Link>
      </div>
    </header>
  );
};
