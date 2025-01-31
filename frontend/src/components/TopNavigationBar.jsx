import React from 'react';
import TopicList from './TopicList';
import SearchBar from './SearchBar';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ topics, isFavPhotoExist, showFavourites, selectedTopic, selectTopic, runSearch }) => {

  // Select topic is invoked here with an empty string as its argument to de-select all topics and display all available photos.

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => selectTopic('')}>PhotoLabs</span>
      <span className="top-nav-bar__links">
        <TopicList {...{ topics, selectedTopic, selectTopic }} />
        <SearchBar {...{ runSearch }} />
        <FavBadge {...{ isFavPhotoExist, showFavourites }} />
      </span>
    </div>
  );
};

export default TopNavigation;