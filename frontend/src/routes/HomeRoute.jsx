import React, { useState } from 'react';
import { FavouritesContext } from 'contexts/FavouritesContext';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics, selectPhoto } = props;
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

  const isFavPhotoExist = () => {
    const currentFavourites = Object.keys(favourites);
    return photos.some(photo => currentFavourites.includes(photo.id));
  };

  const favouritesContext = { favourites, toggleFavourite };


  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist()} />
      <FavouritesContext.Provider value={favouritesContext}>
        <PhotoList photos={photos} selectPhoto={selectPhoto} />
      </FavouritesContext.Provider>

    </div >
  );
};

export default HomeRoute;
