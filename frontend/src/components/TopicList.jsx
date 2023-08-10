import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = ({ topics, selectedTopic, selectTopic }) => {

  const topicList = topics.map((topic) => {
    return <TopicListItem key={topic.id} {...{ ...topic, selectedTopic, selectTopic }} />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );
};

export default TopicList;
