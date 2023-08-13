import React from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photo_data, visible_photo_ids, topics, favourites, selectPhoto, selectTopic, selectedTopic, toggleFavourite, showFavourites }) => {

  const photos = photo_data.filter(photo => visible_photo_ids.includes(photo.id));

  const isFavPhotoExist = () => {
    const currentFavourites = Object.keys(favourites);
    return photos.some(photo => currentFavourites.includes(`${photo.id}`));
  };


  return (
    <div className="home-route">
      <TopNavigation {...{ topics, selectedTopic, selectTopic, showFavourites, isFavPhotoExist }} />
      <PhotoList {...{ photos, favourites, selectPhoto, toggleFavourite }} />
    </div >
  );
};

export default HomeRoute;
