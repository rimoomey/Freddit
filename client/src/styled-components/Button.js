import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  background-color: var(--button-blue);
  color: white;
  font-weight: bold;
  padding: 0.5em;
  border: none;
  border-radius: 0.25em;
  box-shadow: 0 0.25em var(--button-blue-shadow);
  margin-bottom: 1em;

  &:hover {
    cursor: pointer;
  }

  &:active{
    box-shadow: 0 0.05em var(--button-blue-shadow);
    transform: translateY(0.2em);
  }
`;

export { Button };