import React, { useState } from 'react';
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
  const [voteData, setVoteData] = useState({voteCount: votes, userHasVoted: userHasVoted});

  const handleVote = () => {
    fetch(`/users/${user.id}/likes?${parent.type}_id=${parent.id}`, {
      method: 'POST'
    })
      .then(r => {
        if (r.ok) {
          r.json().then(likeData => {
            setVoteData({
              voteCount: likeData['post_or_comment']['num_likes'],
              userHasVoted: likeData['post_or_comment']['voted?']
            });
            console.log(likeData);
          });
        } else {
          r.json().then(console.log);
        }
      });
  }

  return (
    <VotesContainer>
      <VoteButton onClick={handleVote} className={`${voteData.userHasVoted ? 'voted' : ''}`}>⇧</VoteButton>
      <div>{voteData.voteCount}</div>
      <VoteButton disabled>⇩</VoteButton>
    </VotesContainer>
  );
}