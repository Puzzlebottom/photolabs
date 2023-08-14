import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, scrollTo, selectPhoto, toggleFavourite }) => {

  /**
   * So about my cute {...{ syntax}}
   * It works fine, and I think it cleans up some of the React boilerplate, but it's not
   * perfect for every situation.  Here, for instance,  I could have spread photo inside 
   * the shorthand object, but later, if the structure of photo is changed to include a key 
   * that matches any of 'favourites, scrollTo, selectPhoto or toggleFavourite', those values 
   * would be overwritten and I'd have a dickens of a time trying to figure out where 
   * the data loss was happening.
   */

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
