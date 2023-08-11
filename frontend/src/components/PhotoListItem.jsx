import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, location, urls, user, favourites, scrollToTop, selectPhoto, toggleFavourite }) => {

  return (
    <div className="photo-list__item" onClick={scrollToTop}>
      <PhotoFavButton {...{ id, favourites, toggleFavourite }} />
      <img src={urls.regular} className="photo-list__image" onClick={() => selectPhoto(id)} />
      <div className="photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <div >{user.name}</div>
          <div className="photo-list__user-location">{`${location.city}, ${location.country}`}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
