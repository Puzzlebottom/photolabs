import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title, selectedTopic, selectTopic }) => {

  const isSelected = selectedTopic === id;
  return (
    <div className={`topic-list__item${isSelected ? '--selected' : ''}`}>
      <span onClick={() => selectTopic(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;
