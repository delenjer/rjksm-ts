import React, { useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../../interface/interface';
import * as selectors from '../../store/store';
import { loadInfo } from '../../store/thunk/thunk';
import { Home } from "../Home/Home";

export const ModalWindow = () => {
  const info = useSelector((state:IState) => selectors.getInfo(state));
  const isLoading = useSelector((state:IState) => selectors.getIsLoading(state));
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const { artObject } = info;
  const modalWrap  = document.querySelector('.modal-wrapper') as HTMLElement;

  useEffect(() => {
    dispatch(loadInfo(id));
  }, [id, dispatch]);

  const handleClickCloseModal = () => {
    modalWrap.classList.remove('show-modal-wrap');
  }

  return (
    <>
      <Home />

      <div
        className="modal-window"
      >
        {
          artObject && (
            <section className="modal">
              {
                isLoading ? (
                  <div className="load-spinner">
                    <p className="load-spinner__spinner">Loading...</p>
                  </div>
                ) : (
                  <>
                    <article className="modal__info">
                      <img
                        src={artObject.webImage.url}
                        alt="img"
                        className="modal__img"
                      />

                      <h1 className="modal__title">{artObject.title}</h1>

                      <p className="modal__description">
                        {artObject.description}
                      </p>
                    </article>

                    <div className="modal__btn-box">
                      <div className="modal__btn-box--wrapper">
                        <Link
                          to={`/${artObject.objectNumber}`}
                          className="modal__btn modal__btn"
                          onClick={handleClickCloseModal}
                        >
                          View more
                          <br />
                          details
                        </Link>

                        <button
                          type="button"
                          onClick={
                            () => {
                              history.goBack();
                              handleClickCloseModal();
                            }
                          }
                          className="modal__btn"
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
      </div>
    </>
  );
};
