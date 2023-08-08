import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, favourites, toggleFavourite } = props;

  const photoList = photos.map((photo) => {
    const { id, ...rest } = photo;
    return <PhotoListItem key={id} id={id} {...rest} favourite={favourites[id]} toggleFavourite={toggleFavourite} />;
  });

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
