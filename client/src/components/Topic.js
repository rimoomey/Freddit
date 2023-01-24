import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import PostList from './PostList';
import { Button } from '../styled-components/Button';

const TopicTitle = styled.h3`
  margin: 0.5em 0;
`;

const PostButton = styled(Button)`
  margin-left: 1em;
`;

export default function Topic() {
  const { topic_name: topicName } = useParams();
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main>
      <TopicTitle>TOPIC NAME : {topicName} </TopicTitle>
      <p>This is an example of a topic description, instead of it being typed out like this I would hope it would be dynamically generated.</p>
      <Link to="new-post">
        <PostButton>Post to {topicName}</PostButton>
      </Link>
      <hr />
      <PostList posts={a} />
    </main>
  );
}