import React from 'react';
import styled from 'styled-components';

import { PostLi } from '../styled-components/PostLi';
import PostCard from './PostCard';

const PostList = styled.ol`
  list-style: none;
  padding-left: 0px;
`;

export default function Home() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main>
      <p>Popular posts</p>
      <hr></hr>
      <PostList>
        {
          a.map((_, index) => {
            return (
              <PostLi key={index}>
                <PostCard position={index + 1} />
              </PostLi>
            );
          })
        }
      </PostList>
    </main>
  );
}