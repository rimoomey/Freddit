import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { showLoginModal } from '../features/loginModal/loginModalSlice';

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

  &.downvote {
    color: red;
  }

  &.upvote {
    color: #0D0;
  }

  &:disabled {
    color: #ddd;
  }
`;

const VOTE_CLASS = {
  '-1': 'downvote',
  '1': 'upvote',
  '0': ''
};

export default function Votes({ votes, userHasVoted, parent }) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [voteData, setVoteData] = useState({voteCount: votes, userHasVoted: userHasVoted});
  
  const handleVote = (vote) => {
    if (!user.id) {
      return dispatch(showLoginModal());
    }

    fetch(`/users/${user.id}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        [`${parent.type}_id`]: parent.id,
        vote
      })
    })
      .then(r => {
        if (r.ok) {
          r.json().then(likeData => {
            console.log(likeData);
            setVoteData({
              voteCount: likeData['post_or_comment']['num_likes'],
              userHasVoted: likeData['post_or_comment']['voted?']
            });
          });
        } else {
          r.json().then(console.log);
        }
      });
  }

  useEffect(() => {
    setVoteData({voteCount: votes, userHasVoted: userHasVoted});
  }, [votes, userHasVoted])

  return (
    <VotesContainer>
      <VoteButton
        onClick={() => handleVote(1)}
        className={VOTE_CLASS[voteData.userHasVoted]}
      >⇧</VoteButton>
      <div>{voteData.voteCount}</div>
      <VoteButton
        onClick={() => handleVote(-1)}
        className={VOTE_CLASS[voteData.userHasVoted]}
      >⇩</VoteButton>
    </VotesContainer>
  );
}