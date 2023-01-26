import React from 'react';
import styled from 'styled-components';

import { MyLink } from '../styled-components/MyLink';
import Votes from './Votes';

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

export default function PostCard({ position, post }) {
  const { id, title, thumbnail_url: img, created_at: postDate, user, topic, num_likes: votes, 'voted?': userHasVoted } = post;

  return (
    <PostContainer>
      <Ranking>{position}</Ranking>
      <Votes votes={votes} userHasVoted={userHasVoted} parent={{type: 'post', id}}/>
      <MyLink to={`/fr/${topic?.name || 'topic'}/${id}`}>
        <PostThumbnail src={img} alt="thumbnail" />
        <section>
          <PostTitle>{title}</PostTitle>
          <PostDetails>
            submitted on {postDate.substring(0, 10)} by {user.username} to {topic?.name || 'UNKNOWN'}
          </PostDetails>
        </section>
      </MyLink>
    </PostContainer>
  );
}