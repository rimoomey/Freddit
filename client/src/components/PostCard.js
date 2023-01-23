import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5em;
`;

const Ranking = styled.h3`
  color: var(--grey);
  padding: 0 1em;
  min-width: 2rem;
  text-align: right;
`;

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

const PostThumbnail = styled.img`
  display: block;
  max-width: 5rem;
`;

const PostTitle = styled.h3`
  font-weight: normal;
  color: blue;
  margin: 0.25em;
`;

const PostDetails = styled.p`
  font-size: 0.75em;
  padding-left: 0.5em;
`;

export default function PostCard({ position }) {

  return (
    <PostContainer>
      <Ranking>{position}</Ranking>
      <VotesContainer>
        <VoteButton>⇧</VoteButton>
        <div>VOTES</div>
        <VoteButton>⇩</VoteButton>
      </VotesContainer>
      <PostThumbnail src="https://a.thumbs.redditmedia.com/bUKEZv1sh0YzDoFLv8WCZMuElZvAFWmX4d0a9kwtI68.jpg" alt="thumbnail" />
      <section>
        <PostTitle>POST TITLE: Lorem Ipsum or something</PostTitle>
        <PostDetails>
          submitted/updated on DATE by USER to TOPIC 
        </PostDetails>
      </section>
    </PostContainer>
  );
}