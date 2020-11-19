import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IState } from '../../interface/interface';
import *as selectors from '../../store/store';
import { loadingArtCollections } from '../../store/thunk/thunk';

import { ArtCollectionsList } from '../ArtCollectionsList/ArtCollectionsList';

export const ArtCollections: React.FC = () => {
  const artCollections = useSelector((state:IState) => selectors.getArtCollections(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingArtCollections());
  }, []);

  return (
    <ArtCollectionsList artCollections={artCollections} />
  );
};
