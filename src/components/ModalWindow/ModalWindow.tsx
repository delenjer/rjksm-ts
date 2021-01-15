import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { IState } from '../../interface/interface';
import * as selectors from '../../store/store';
import {setActionModal} from "../../store/modalWindowReduser/actions";
import { setError } from "../../store/errorMessageReducer/actions";

export const ModalWindow = () => {
  const info = useSelector((state:IState) => selectors.getInfo(state));
  //@ts-ignore
  const isActiveModal = useSelector((state:IState) => selectors.getActiveModal(state));
  //@ts-ignore
  const isLoading = useSelector((state:IState) => selectors.getIsLoading(state));
  const isError = useSelector((state:IState) => selectors.getError(state));
  const dispatch = useDispatch();
  const history = useHistory();
  const { artObject } = info;

  const handleClickCloseModal = () => {
    dispatch(setActionModal(false));
    dispatch(setError(false));
  }

  return (
    <>
      <div className={isActiveModal ? 'modal-wrapper active-modal-wrap' : 'modal-wrapper'}>
        <div
          className="modal-window"
        >
          {
            isError ? (
              <div className="error-wrapper">
                <p className="error-message">
                  Error from server!!!
                </p>

                <button
                  type="button"
                  onClick={handleClickCloseModal}
                  className="modal__btn"
                >
                  Close
                </button>
              </div>
            ) : (
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
            )
          }
        </div>
      </div>
    </>
  );
};
