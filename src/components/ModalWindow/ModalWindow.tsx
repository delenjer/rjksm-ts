import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { IState } from '../../interface/interface';
import * as selectors from '../../store/store';
import { setActionModal } from "../../store/modalWindowReduser/actions";
import { setError } from "../../store/errorMessageReducer/actions";
import { Modal } from "../Modal/Modal";

export const ModalWindow = () => {
  const info = useSelector((state:IState) => selectors.getInfo(state));
  const isActiveModal = useSelector((state:IState) => selectors.getActiveModal(state));
  const isError = useSelector((state:IState) => selectors.getError(state));
  const isLoadingContent = useSelector((state:IState) => selectors.isLoadingContent(state));
  const dispatch = useDispatch();
  const { artObject } = info;

  const handleClickCloseModal = (): void => {
    dispatch(setActionModal(false));
    dispatch(setError(false));
  }

  return (
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
              <Modal>
                {
                  isLoadingContent ? (
                    <div className="spinner">Loading...</div>
                  ) : (
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
                  )
                }

                <div className="modal__btn-box">
                  <div className="modal__btn-box--wrapper">
                    <Link
                      to={`/details`}
                      className="modal__btn modal__btn"
                      onClick={handleClickCloseModal}
                    >
                      View more
                      <br />
                      details
                    </Link>

                    <button
                      type="button"
                      onClick={handleClickCloseModal}
                      className="modal__btn"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Modal>
            )
          )
        }
      </div>
    </div>
  );
};
