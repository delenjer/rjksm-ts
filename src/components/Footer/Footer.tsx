import React, { useEffect } from 'react';
// @ts-ignore
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../interface/interface';
import *as selectors from '../../store/store';
import { setButtonList, setButtonText } from '../../store/btnListReducer/actions';
import { setLoadItemsOnPage } from '../../store/loadingArtItemsReducer/actions';

type PropsFooter = {
  pagesCount: number;
  isLoading: boolean;
  handlePageClick(page:{selected: number}): void;
}

export const Footer: React.FC<PropsFooter> = ({ pagesCount, handlePageClick, isLoading }) => {
  useSelector((state: IState) => selectors.getBtnList(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setButtonList(document.querySelectorAll('.load-items__btn')));
  }, [dispatch]);

  const handleLoadItem = (e:React.MouseEvent<HTMLButtonElement>) => {
    const { innerHTML } = e.target as HTMLButtonElement;

    dispatch(setLoadItemsOnPage(+innerHTML));
  };

  const handlerGetButtonText = (e:React.MouseEvent<HTMLButtonElement>) => {
    const { innerHTML } = e.target as HTMLButtonElement;

    dispatch(setButtonText(innerHTML));
  }

  return (
    <>
      <footer
        className={isLoading ? 'hidden footer' : 'footer'}
      >
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pagesCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />

        <div className="load-items">
          <button
            type="button"
            className="load-items__btn active-btn"
            onClick={(e:React.MouseEvent<HTMLButtonElement>) => {
              handleLoadItem(e);
              handlerGetButtonText(e);
            }}
          >
            10
          </button>

          <button
            type="button"
            className="load-items__btn"
            onClick={(e:React.MouseEvent<HTMLButtonElement>) => {
              handleLoadItem(e);
              handlerGetButtonText(e);
            }}
          >
            50
          </button>

          <button
            type="button"
            className="load-items__btn"
            onClick={(e:React.MouseEvent<HTMLButtonElement>) => {
              handleLoadItem(e);
              handlerGetButtonText(e);
            }}
          >
            100
          </button>
        </div>
      </footer>
    </>
  );
}
