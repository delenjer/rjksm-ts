import React from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../interface/interface';
import *as selectors from '../../store/store';
import { ArtCollectionsList } from '../ArtCollectionsList/ArtCollectionsList';

export const ArtCollections = React.memo(
  () => {
    const artCollections = useSelector((state:IState) => selectors.getArtCollections(state));
    const isLoading = useSelector((state:IState) => selectors.getIsLoading(state));

    console.log(artCollections);

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
  }
);
