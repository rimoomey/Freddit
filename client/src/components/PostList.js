import React from 'react';
import styled from 'styled-components';

import { PostLi } from '../styled-components/PostLi';
import PostCard from './PostCard';

const PostOrderedList = styled.ol`
  list-style: none;
  padding-left: 0px;
`;

export default function PostList({ posts }) {
  const postElements = posts.map((_, index) =>
    <PostLi key={index}>
      <PostCard position={index + 1} />
    </PostLi>
  );

  return (
    <PostOrderedList>
      {postElements}
    </PostOrderedList>
  );
}