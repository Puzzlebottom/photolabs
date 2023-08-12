import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, showFavourites }) => {
  return (
    <div className='fav-badge' onClick={showFavourites}>
      <FavIcon selected={true} displayAlert={!!isFavPhotoExist()} />
    </div>
  );
};

export default FavBadge;