import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ topics, isFavPhotoExist, showFavourites, selectedTopic, selectTopic }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => selectTopic('')}>PhotoLabs</span>
      <span className="top-nav-bar__links">
        <TopicList {...{ topics, selectedTopic, selectTopic }} />
        <FavBadge {...{ isFavPhotoExist, showFavourites }} />
      </span>
    </div>
  );
};

export default TopNavigation;