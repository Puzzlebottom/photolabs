import React, { useCallback, useContext } from 'react';
import { FavouritesContext } from 'contexts/FavouritesContext';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {
  const { id } = props;
  const { favourites, toggleFavourite } = useContext(FavouritesContext);

  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavourite(id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favourites[id]} />
      </div>
    </div>
  );
}

export default PhotoFavButton;