import React from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photo_data, visible_photo_ids, topics, favourites, selectPhoto, selectTopic, selectedTopic, toggleFavourite, showFavourites, runSearch }) => {
  /**
   * using a single state for all available photos and filtering them based on 
   * visiblity criteria opens up more possibilities for complex filtering without 
   * making a buttload more api calls (and building the endpoints to serve them)
   */

  const photos = photo_data.filter(photo => visible_photo_ids[photo.id]);

  /**
   * This function lives here because nothing in the TopNavigation component needs 
   * actual photo data.  The invocation happens in FavBadge because HomeRoute doesn't 
   * care what FavBadge is doing.
   */

  const isFavPhotoExist = () => {
    const currentFavourites = Object.keys(favourites);
    return photos.some(photo => currentFavourites.includes(`${photo.id}`)); // I'd never used the .some method before! Neat!
  };


  return (
    <div className="home-route">
      <TopNavigation {...{ topics, selectedTopic, selectTopic, showFavourites, isFavPhotoExist, runSearch }} />
      <PhotoList {...{ photos, favourites, selectPhoto, toggleFavourite }} />
    </div >
  );
};

export default HomeRoute;
