import React, { useEffect } from 'react';
//@ts-ignore
import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { IState } from '../../interface/interface';
import * as selectors from '../../store/store';
import { loadInfo } from '../../store/thunk/thunk';
// import { Home } from "../Home/Home";
import {setActionModal} from "../../store/modalWindowReduser/actions";
import { setError } from "../../store/errorMessageReducer/actions";

export const ModalWindow = () => {
  //@ts-ignore
  const info = useSelector((state:IState) => selectors.getInfo(state));

  const infoId = useSelector((state:IState) => selectors.getInfoId(state));
  const isActiveModal = useSelector((state:IState) => selectors.getActiveModal(state));
  //@ts-ignore
  const isLoading = useSelector((state:IState) => selectors.getIsLoading(state));
  const isError = useSelector((state:IState) => selectors.getError(state));
  const dispatch = useDispatch();
  //@ts-ignore
  const { id } = useParams();
  const history = useHistory();

  const { artObject } = info;

  console.log(info);

  useEffect(() => {
    dispatch(loadInfo(infoId));
  }, [infoId]);

  const handleClickCloseModal = () => {
    dispatch(setActionModal(false));
    dispatch(setError(false));
  }

  return (
    <>
      {/*<Home />*/}

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
