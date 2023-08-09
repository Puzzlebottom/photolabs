import React, { useContext } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favourites, selectPhoto, toggleFavourite }) => {

  const isFavPhotoExist = () => {
    const currentFavourites = Object.keys(favourites);
    return photos.some(photo => currentFavourites.includes(photo.id));
  };

  return (
    <div className="home-route">
      <TopNavigation {...{ topics }} isFavPhotoExist={isFavPhotoExist()} />
      <PhotoList {...{ photos, favourites, selectPhoto, toggleFavourite }} />
    </div >
  );
};

export default HomeRoute;
