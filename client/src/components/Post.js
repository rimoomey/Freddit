import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

import PostBody from './PostBody';
import CommentSection from './CommentSection';

export default function Post() {
  const { topic_name: topicName, post_id: postId } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`/posts/${postId}`)
      .then(r => {
        if (r.ok) {
          r.json().then(setPost);
        } else {
          r.json().then(console.log);
        }
      })
  }, []);

  return (
    <main>
      {post.id ? <PostBody post={post} /> : 'Loading...'}
      <hr />
      <CommentSection comments={post.sorted_comments || []}/>
    </main>
  );
}