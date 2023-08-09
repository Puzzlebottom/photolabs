import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, favourites, selectPhoto, toggleFavourite } = props;

  const photoList = photos.map((photo) => {
    return <PhotoListItem key={photo.id} {...photo} favourites={favourites} selectPhoto={selectPhoto} toggleFavourite={toggleFavourite} />;
  });

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
