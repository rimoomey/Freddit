import React from 'react';
import styled from 'styled-components';

import Votes from './Votes';
import { HDiv } from '../styled-components/Divs';

const CommentDiv = styled(HDiv)`
  border-bottom: 1px solid var(--grey);
`;

export default function Comment() {
  return (
    <CommentDiv>
      <Votes />
      <div>
        <h5>USERNAME - DD/MM/YYYY</h5>
        <p>Comment Body. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </CommentDiv>
  );
}