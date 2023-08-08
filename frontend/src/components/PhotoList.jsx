import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const photoList = props.photos.map((photo) => {
    const { id, location, urls, user } = photo;
    return <PhotoListItem key={id} location={location} urls={urls} user={user} />;
  });

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
