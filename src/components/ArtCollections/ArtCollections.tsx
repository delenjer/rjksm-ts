import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IState } from '../../interface/interface';
import *as selectors from '../../store/store';
import { ArtCollectionsList } from '../ArtCollectionsList/ArtCollectionsList';
import { setTotalCount } from "../../store/loadingArtItemsReducer/actions";

export const ArtCollections = () => {
  const artCollections = useSelector((state:IState) => selectors.getArtCollections(state));
  const isLoading = useSelector((state:IState) => selectors.getIsLoading(state));
  const maxGetElementsFromServer = 10000;
  const dispatch = useDispatch();

  useEffect(() => {
    const totalCount = artCollections.count > maxGetElementsFromServer ? maxGetElementsFromServer : artCollections.count;

    dispatch(setTotalCount(totalCount));
  }, [artCollections]);

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
    </>
  );
};
