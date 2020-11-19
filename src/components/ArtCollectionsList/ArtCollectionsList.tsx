import React from 'react';

import { IArtCollections } from '../../interface/interface';

type PropsArtCollections = {
  artCollections: IArtCollections;
}

export const ArtCollectionsList: React.FC<PropsArtCollections> = ({ artCollections }) => {
  console.log(artCollections);

  return (
    <h1>art Collections List</h1>
  );
};
