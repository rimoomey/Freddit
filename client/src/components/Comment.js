import React from 'react';
import styled from 'styled-components';

import Votes from './Votes';
import { HDiv } from '../styled-components/Divs';

const CommentDiv = styled(HDiv)`
  border-bottom: 1px solid var(--grey);
`;

export default function Comment({ comment }) {
  const { content, created_at: postDate, num_likes: votes, user } = comment;

  return (
    <CommentDiv>
      <Votes votes={votes}/>
      <div>
        <h5>{user.username} - {postDate.substring(0, 10)}</h5>
        <p>{content}</p>
      </div>
    </CommentDiv>
  );
}