import React from 'react';
import styled from 'styled-components';
import { FormInput } from '../styled-components/FormInput';

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  margin: 0.75em;
`;

export default function LoginForm() {

  return (
    <LoginContainer>
      <FormInput
        type="text"
        placeholder="username"
      />
      <FormInput
        type="password"
        placeholder="password"
      />
      <FormInput
        type="submit"
        value="Login"
      />
    </LoginContainer>
  );
}