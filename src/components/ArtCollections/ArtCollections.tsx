import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IState } from '../../interface/interface';
import *as selectors from '../../store/store';
import { loadingArtCollections } from '../../store/thunk/thunk';
import { setCurrentPage } from '../../store/loadingArtItemsReducer/actions';

import { ArtCollectionsList } from '../ArtCollectionsList/ArtCollectionsList';
import { Footer } from '../Footer/Footer';

export const ArtCollections: React.FC = () => {
  const artCollections = useSelector((state:IState) => selectors.getArtCollections(state));
  const loadingArtItems = useSelector((state:IState) => selectors.getLoadingArtItems(state));
  const isLoading = useSelector((state:IState) => selectors.getIsLoading(state));
  const { currentPage, pageSize, totalPicturesCount, query, selectValue } = loadingArtItems;
  const pagesCount = Math.ceil(totalPicturesCount / pageSize);
  const dispatch = useDispatch();

  const handlePageClick = (page:{selected: number}): void => {
    dispatch(setCurrentPage(page.selected + 1));
  };

  useEffect(() => {
    dispatch(loadingArtCollections(currentPage, pageSize, query, selectValue));
  }, [currentPage, pageSize, query, selectValue, dispatch]);

  return (
    <>
      {
        !isLoading ? (
          <main className="wrapper">
            <ArtCollectionsList artCollections={artCollections} />
          </main>
        ) : (
          <div className="loader-box">
            <div className="loader">Loading...</div>
          </div>
        )
      }

      <Footer
        isLoading={isLoading}
        pagesCount={pagesCount}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </>
  );
};
