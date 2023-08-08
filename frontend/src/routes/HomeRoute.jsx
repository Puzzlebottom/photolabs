import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics } = props;
  const [favourites, setFavourites] = useState({});

  const toggleFavourite = (photoId) => {
    const currentFavourites = { ...favourites };
    if (currentFavourites[photoId]) {
      delete currentFavourites[photoId];
    } else {
      currentFavourites[photoId] = true;
    }
    setFavourites(currentFavourites);
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite} />
    </div>
  );
};

export default HomeRoute;
