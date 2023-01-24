import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SignupButton from './SignupButton';

const Icon = styled.img`
  display: block;
  width: 100%;
  max-width: 5rem;
  margin: 0 1em;
`;

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--light-blue);
  border-bottom: 2px solid var(--button-blue);
`;

const SignupDiv = styled.div`
  padding: 0 1em;
`;

export default function Header() {

  return (
    <Head>
      <Link to="/">
        <Icon src="https://play-lh.googleusercontent.com/nlptFyxNsb8J0g8ZLux6016kunduV4jCxIrOJ7EEy-IobSN1RCDXAJ6DTGP81z7rr5Zq" alt="icon" />
      </Link>
      <SignupDiv>
        {/* Signup */}
        <p>Want to join all the swell chaps at Freddit? Sign up today!</p>
        <SignupButton />
      </SignupDiv>
    </Head>
  );
}