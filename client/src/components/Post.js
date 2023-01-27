import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

import PostBody from './PostBody';
import CommentSection from './CommentSection';

export default function Post() {
  const { post_id: postId } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`/api/posts/${postId}`)
      .then(r => {
        if (r.ok) {
          r.json().then(setPost);
        } else {
          r.json().then(console.log);
        }
      })
  }, [postId]);

  const handleNewComment = c => {
    const comments = post.sorted_comments;
    setPost({...post, sorted_comments: [...comments, c]});
  }
  
  const handleEditComment = editedComment => {
    const comments = post.sorted_comments;
    setPost({...post, sorted_comments: comments.map(c =>
      (c.id === editedComment.id) ? editedComment : c
    )});
  }

  const handleDeleteComment = deletedCommentId => {
    const comments = post.sorted_comments;
    setPost({...post, sorted_comments: comments.filter(c => c.id !== deletedCommentId)});
  }

  return (
    <main>
      {post.id ? <PostBody post={post} /> : 'Loading...'}
      <hr />
      <CommentSection comments={post.sorted_comments || []} postId={post.id || -1} onComment={handleNewComment} onEdit={handleEditComment} onDelete={handleDeleteComment} />
    </main>
  );
}