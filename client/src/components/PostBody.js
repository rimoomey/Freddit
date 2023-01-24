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
  const { topic } = post;

  return (
    <Section as="article">
      <HDiv>
        <Votes />
        <div>
          <h3>POST TITLE</h3>
          <h4>Submitted to <Link to={`/fr/${topic}`}>{topic}</Link> by USERNAME on DD/MM/YYYY</h4>
          <Img src="https://a.thumbs.redditmedia.com/bUKEZv1sh0YzDoFLv8WCZMuElZvAFWmX4d0a9kwtI68.jpg" alt="POST TITLE" />
          <p>
            Post body. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </HDiv>
    </Section>
  );
}