import React from 'react';
import { useParams} from 'react-router-dom';

export default function Post() {
  const { topic_name: topicName, post_id: postId } = useParams();

  return (
    <>
      <div>Topic</div>
      <h3>This post is about: {topicName}</h3>
      <h5>Post id is: {postId}</h5>
    </>
  );
}