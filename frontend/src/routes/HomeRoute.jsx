import React, { useContext } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics, favourites, selectPhoto, toggleFavourite } = props;

  const isFavPhotoExist = () => {
    const currentFavourites = Object.keys(favourites);
    return photos.some(photo => currentFavourites.includes(photo.id));
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist()} />
      <PhotoList photos={photos} favourites={favourites} selectPhoto={selectPhoto} toggleFavourite={toggleFavourite} />
    </div >
  );
};

export default HomeRoute;
