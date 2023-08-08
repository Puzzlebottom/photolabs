import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = (props) => {

  const topicList = props.topics.map((topic) => {
    const { id, slug, title } = topic;
    return <TopicListItem key={id} slug={slug} title={title} />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );
};

export default TopicList;
