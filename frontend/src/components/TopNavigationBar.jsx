import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ topics, isFavPhotoExist }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className="top-nav-bar__links">
        <TopicList {...{ topics }} />
        <FavBadge {...{ isFavPhotoExist }} />
      </span>
    </div>
  );
};

export default TopNavigation;