import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ id, favourites, toggleFavourite }) {

  const handleClick = (e) => {
    e.stopPropagation();
    toggleFavourite(id);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favourites[id]} />
      </div>
    </div>
  );
}

export default PhotoFavButton;