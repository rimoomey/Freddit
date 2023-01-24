import React from 'react';
import { useParams} from 'react-router-dom';

import PostBody from './PostBody';
import CommentSection from './CommentSection';

export default function Post() {
  const { topic_name: topicName } = useParams();

  return (
    <main>
      <PostBody post={{topic: topicName}} />
      <hr />
      <CommentSection />
    </main>
  );
}