import React, { useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { IState } from '../../interface/interface';

import * as selectors from '../../store/store';
import { loadInfo } from '../../store/thunk/thunk';

export const PopupInfo = () => {
  // const [, setClick] = useState(true);
  const info = useSelector((state:IState) => selectors.getInfo(state));
  const isLoading = useSelector((state:IState) => selectors.getIsLoading(state));
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const { artObject } = info;

  useEffect(() => {
    dispatch(loadInfo(id));
  }, [id, dispatch]);


  // const addFavorite = (e, idObj) => {
  //   e.preventDefault();
  //
  //   dispatch(setFavorite(idObj));
  // };

  return (
    <>
      {
        artObject && (
          <section className="popup">
            {
              isLoading ? (
                <div className="load-spinner">
                  <p className="load-spinner__spinner">Loading...</p>
                </div>
              ) : (
                <>
                  <article className="popup__info">
                    <img
                      src={artObject.webImage.url}
                      alt="img"
                      className="popup__img"
                    />

                    <h1 className="popup__title">{artObject.title}</h1>

                    <p className="popup__description">
                      {artObject.description}
                    </p>
                  </article>

                  <div className="popup__btn-box">
                    {/*<button*/}
                    {/*  type="button"*/}
                    {/*  onClick={(e) => {*/}
                    {/*    addFavorite(e, artObject.objectNumber);*/}
                    {/*  }}*/}
                    {/*  className="popup__btn popup__btn--favorite"*/}
                    {/*>*/}
                    {/*  Add to fav list*/}
                    {/*</button>*/}

                    <div className="popup__btn-box--wrapper">
                      <Link
                        to={`/${artObject.objectNumber}`}
                        className="popup__btn popup__btn"
                      >
                        View more
                        <br />
                        details
                      </Link>

                      <button
                        type="button"
                        onClick={() => history.goBack()}
                        className="popup__btn"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </>
              )
            }
          </section>
        )
      }
    </>
  );
};
