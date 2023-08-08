import React, { useState } from 'react';
import { FavouritesContext } from 'contexts/FavouritesContext';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics } = props;
  const [favourites, setFavourites] = useState({});

  const toggleFavourite = (id) => {
    const currentFavourites = { ...favourites };
    if (currentFavourites[id]) {
      delete currentFavourites[id];
    } else {
      currentFavourites[id] = true;
    }
    setFavourites(currentFavourites);
  };

  const favouritesContext = { favourites, toggleFavourite };

  return (
    <div className="home-route">
      <FavouritesContext.Provider value={favouritesContext}>
        <TopNavigation topics={topics} />
        <PhotoList photos={photos} />
      </FavouritesContext.Provider>
    </div >
  );
};

export default HomeRoute;
