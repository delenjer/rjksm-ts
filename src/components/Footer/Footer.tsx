import React, { useEffect } from 'react';
// @ts-ignore
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../interface/interface';
import *as selectors from '../../store/store';
import { setButtonList, setButtonText } from '../../store/btnListReducer/actions';
import { setCurrentPage, setLoadItemsOnPage } from '../../store/loadingArtItemsReducer/actions';
import { loadingArtCollections } from "../../store/thunk/thunk";
import { LoadCollectionItemsBtn } from "../LoadCollectionItemsBtn/LoadCollectionItemsBtn";

export const Footer: React.FC = () => {
  useSelector((state:IState) => selectors.getBtnList(state));
  const isLoading = useSelector((state:IState) => selectors.getIsLoading(state));
  const loadingArtItems = useSelector((state:IState) => selectors.getLoadingArtItems(state));
  const { currentPage, pageSize, totalPicturesCount, query, selectValue } = loadingArtItems;
  const dispatch = useDispatch();
  const pagesCount = Math.ceil(totalPicturesCount / pageSize);

  const handlePageClick = (page:{selected: number}): void => {
    dispatch(setCurrentPage(page.selected + 1));
  };

  useEffect(() => {
    dispatch(loadingArtCollections(currentPage, pageSize, query, selectValue));
  }, [currentPage, pageSize, query, selectValue, totalPicturesCount]);

  useEffect(() => {
    dispatch(setButtonList(document.querySelectorAll('.load-items__btn')));
  }, [dispatch]);

  const handleLoadItem = (e:React.MouseEvent<HTMLButtonElement>): void => {
    const { innerHTML } = e.target as HTMLButtonElement;

    dispatch(setLoadItemsOnPage(+innerHTML));
  };

  const handlerGetButtonText = (e:React.MouseEvent<HTMLButtonElement>): void => {
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
          onPageChange={(page: { selected: number; }) => handlePageClick(page)}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
          initialPage={currentPage - 1}
        />

        <div className="load-items">
          <LoadCollectionItemsBtn
            className="load-items__btn active-btn"
            handleLoadItem={handleLoadItem}
            handlerGetButtonText={handlerGetButtonText}
            children={10}
          />

          <LoadCollectionItemsBtn
            className="load-items__btn active-btn"
            handleLoadItem={handleLoadItem}
            handlerGetButtonText={handlerGetButtonText}
            children={50}
          />

          <LoadCollectionItemsBtn
            className="load-items__btn active-btn"
            handleLoadItem={handleLoadItem}
            handlerGetButtonText={handlerGetButtonText}
            children={100}
          />
        </div>
      </footer>
    </>
  );
}
