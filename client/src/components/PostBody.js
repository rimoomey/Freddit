import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Section, HDiv } from '../styled-components/Divs';
import Votes from './Votes';

const Img = styled.img`
  min-width: 12rem;
  max-width: 80%;
`;

export default function PostBody({ post }) {
  const { id, title, content, user, topic, num_likes: votes, created_at: postDate } = post;
  console.log(post);

  return (
    <Section as="article">
      <HDiv>
        <Votes votes={votes}/>
        <div>
          <h3>{title}</h3>
          <h4>Submitted to <Link to={`/fr/${topic.name}`}>{topic.name}</Link> by {user.username} on {postDate.substring(0, 10)}</h4>
          <Img src="https://a.thumbs.redditmedia.com/bUKEZv1sh0YzDoFLv8WCZMuElZvAFWmX4d0a9kwtI68.jpg" alt={title} />
          <p>
            {content}
          </p>
        </div>
      </HDiv>
    </Section>
  );
}