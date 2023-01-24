import React from 'react';
import styled from 'styled-components';

const VotesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--grey);
`;

const VoteButton = styled.button`
  font-weight: bold;
  font-size: 1em;
  background-color: transparent;
  border: none;
  color: inherit;

  &:hover {
    cursor: pointer;
  }
`;

export default function Votes() {

  return (
    <VotesContainer>
      <VoteButton>⇧</VoteButton>
      <div>VOTES</div>
      <VoteButton>⇩</VoteButton>
    </VotesContainer>
  );
}