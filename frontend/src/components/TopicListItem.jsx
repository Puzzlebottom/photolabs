import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title, selectedTopic, selectTopic }) => {

  // A man walks into a little bar and says: 'Oh, This must be the selected topic!'
  // Because it renders a little bar above the selected topic.
  const isSelected = selectedTopic === id;
  // ...get it?

  return (
    <div className={`topic-list__item${isSelected ? '--selected' : ''}`}>
      <span onClick={() => selectTopic(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;
