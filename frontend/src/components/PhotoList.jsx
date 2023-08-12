import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, scrollTo, selectPhoto, toggleFavourite }) => {

  const photoList = photos.map((photo) => {
    return <PhotoListItem key={photo.id} {...photo} {...{ favourites, scrollTo, selectPhoto, toggleFavourite }} />;
  });

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
