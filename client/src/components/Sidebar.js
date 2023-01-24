import React from 'react';
import styled from 'styled-components';

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
      <LoginForm />
      <Button>Submit a new post</Button>
    </Aside>
  );
}