import React from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ visible_photos, topics, favourites, selectPhoto, selectTopic, selectedTopic, toggleFavourite, showFavourites }) => {

  const isFavPhotoExist = () => {
    const currentFavourites = Object.keys(favourites);
    return visible_photos.some(photo => currentFavourites.includes(`${photo.id}`));
  };

  return (
    <div className="home-route">
      <TopNavigation {...{ topics, selectedTopic, selectTopic, showFavourites, isFavPhotoExist }} />
      <PhotoList {...{ visible_photos, favourites, selectPhoto, toggleFavourite }} />
    </div >
  );
};

export default HomeRoute;
