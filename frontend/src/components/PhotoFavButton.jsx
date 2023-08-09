import React, { useCallback } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ id, favourites, toggleFavourite }) {

  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavourite(id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favourites[id]} />
      </div>
    </div>
  );
}

export default PhotoFavButton;