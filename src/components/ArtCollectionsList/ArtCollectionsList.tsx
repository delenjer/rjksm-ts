import React from 'react';

import { IArtCollections } from '../../interface/interface';
import { ArtCollectionsItem } from '../ArtCollectionsItem/ArtCollectionsItem';

type PropsArtCollections = {
  artCollections: IArtCollections;
}

export const ArtCollectionsList: React.FC<PropsArtCollections> = ({ artCollections }) => {
  const { artObjects } = artCollections;

  return (
    <section className="collection">
      <div className="collection__list">
        {
          artObjects && artObjects.map(art => (
            <ArtCollectionsItem key={art.id} art={art} />
          ))
        }
      </div>
    </section>
  );
};
