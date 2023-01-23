import React from 'react';
import { useParams } from 'react-router-dom';

export default function Topic() {
  const { topic_name: topicName } = useParams();

  return (
    <>
      <div>Topic</div>
      <h3>This topic is about: {topicName}</h3>
    </>
  );
}