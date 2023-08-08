import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const photoList = props.photos.map((photo) => {
    return <PhotoListItem key={photo.id} {...photo} selectPhoto={props.selectPhoto} />;
  });

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
