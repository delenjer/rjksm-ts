import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { IState } from "../../interface/interface";
import * as selectors from "../../store/store";
import { setSearch } from '../../store/loadingArtItemsReducer/actions';

export const Header = () => {
  const [isQuery, setQuery] = useState('');
  const getFavorite = useSelector((state:IState) => selectors.getFavorite(state));
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setSearch(isQuery));
    setQuery('');
  };

  return (
    <header className="header">
      <div className="header__wrap">
        <Link to="/" className="header__logo">Rijksmuseum</Link>

        <form
          action="#"
          onSubmit={(e) => handleSubmit(e)}
          className="form"
        >
          <input
            type="text"
            placeholder="Search keyword..."
            value={isQuery}
            onChange={(e) => setQuery(e.target.value)}
            className="form__input"
          />

          <button
            type="submit"
            className="form__button"
          >
            Search
          </button>
        </form>

        <Link to="/favorite" className="header__link">
          <span className="header__link--count">
            {getFavorite.length}
          </span>
        </Link>
      </div>
    </header>
  );
};
