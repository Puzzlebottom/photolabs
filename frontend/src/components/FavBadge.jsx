import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

// I could have passed isFavPhotoExist through and invoked it on the other side,
// but the FavIcon had already defined the displayAlert prop expecting a Boolean, 
// and I didn't have to touch the component at all if I invoked here.
// (I also realize that between this function returning a boolean, and the !! coercion 
// in FavIcon I definitely didn't need to !! here, but I hadn't seen the trick before 
// so I wanted to use it.  Sue me. 😄)

const FavBadge = ({ isFavPhotoExist, showFavourites }) => {
  return (
    <div className='fav-badge' onClick={showFavourites}>
      <FavIcon selected={true} displayAlert={!!isFavPhotoExist()} />
    </div>
  );
};

export default FavBadge;