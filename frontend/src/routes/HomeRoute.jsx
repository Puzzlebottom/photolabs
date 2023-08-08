import React, { useContext } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import { FavouritesContext } from 'contexts/FavouritesContext';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics, selectPhoto } = props;
  const { favourites } = useContext(FavouritesContext);

  const isFavPhotoExist = () => {
    const currentFavourites = Object.keys(favourites);
    return photos.some(photo => currentFavourites.includes(photo.id));
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist()} />
      <PhotoList photos={photos} selectPhoto={selectPhoto} />
    </div >
  );
};

export default HomeRoute;
