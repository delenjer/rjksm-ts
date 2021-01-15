import React from 'react';

type propsFavoriteButton = {
  handleFavoriteClick(e: React.MouseEvent<HTMLButtonElement>, id: string): void;
  art: { objectNumber: string, };
  getFavorite: string[];
}

export const FavoriteButton: React.FC<propsFavoriteButton> = ({ handleFavoriteClick, art, getFavorite }) => {

  return (
    <button
      className="favorite-btn"
      onClick={(e) =>
        handleFavoriteClick(e, art.objectNumber)
      }
    >
      {
        getFavorite.includes(art.objectNumber) ? (
          <span className="icon-heart active-favorite" />
        ) : (
          <span className="icon-heart" />
        )
      }
    </button>
  );
};
