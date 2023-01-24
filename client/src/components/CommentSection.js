import React from 'react';
import styled from 'styled-components';

import Comment from './Comment';
import CreateComment from './CreateComment';
import { Section } from '../styled-components/Divs';

const CommentList = styled.ul`
  list-style: none;
`;

export default function CommentSection() {
  const comments = [1, 2, 3, 4, 5].map(n =>
    <Comment key={n} />
  );

  return (
    <Section>
      <h4>Want to add to the discussion?</h4>
      <CreateComment />
      <h4>Comments</h4>
      <CommentList>
        {comments}
      </CommentList>
    </Section>
  );
}