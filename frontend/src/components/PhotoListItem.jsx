import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props;
  return (
    <div key={id}>
      <img src={imageSource} />
      <img src={profile} />
      <div>{username}</div>
      <div>{`${location.city}, ${location.country}`}</div>
    </div>
  );
};

export default PhotoListItem;
