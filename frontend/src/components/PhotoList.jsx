import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, selectPhoto, toggleFavourite }) => {

  const photoList = photos.map((photo) => {
    return <PhotoListItem key={photo.id} {...photo} {...{ favourites, selectPhoto, toggleFavourite }} />;
  });

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
