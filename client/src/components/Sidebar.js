import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm';
import { Button } from '../styled-components/Button';

const Aside = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0px;
  width: 20%;
  max-width: 250px;
  padding: 0 0.5em;
`;

export default function Sidebar() {
  return (
    <Aside>
      {false && <LoginForm />}
      <Link to="/new-post">
        <Button>Submit a new post</Button>
      </Link>
    </Aside>
  );
}