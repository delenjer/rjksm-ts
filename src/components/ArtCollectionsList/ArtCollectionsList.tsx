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
      {
        artObjects && !artObjects.length ? (
          <p className="error-message">No search information, reload the page!!!</p>
        ) : (
          <div className="collection__list">
            {
              artObjects && artObjects.map(art => (
                <ArtCollectionsItem key={art.id} art={art} />
              ))
            }
          </div>
        )
      }
    </section>
  );
};
