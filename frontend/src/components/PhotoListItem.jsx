import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, location, urls, user } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton id={id} />
      <img src={urls.regular} className="photo-list__image" />
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
