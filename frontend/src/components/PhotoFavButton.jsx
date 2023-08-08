import React, { useCallback } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {
  const { id, favourite, toggleFavourite } = props;

  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavourite(id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;