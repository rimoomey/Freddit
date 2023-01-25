import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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

  &.voted {
    color: red;
  }

  &:disabled {
    color: #ddd;
  }
`;

export default function Votes({ votes, userHasVoted, parent }) {
  const user = useSelector(state => state.user);

  const handleVote = () => {
    fetch(`/users/${user.id}/likes?${parent.type}_id=${parent.id}`, {
      method: 'POST'
    })
      .then(r => {
        if (r.ok) {
          r.json().then(console.log);
        } else {
          r.json().then(console.log);
        }
      });
  }

  return (
    <VotesContainer>
      <VoteButton onClick={handleVote} className={`${userHasVoted ? 'voted' : ''}`}>⇧</VoteButton>
      <div>{votes}</div>
      <VoteButton disabled>⇩</VoteButton>
    </VotesContainer>
  );
}