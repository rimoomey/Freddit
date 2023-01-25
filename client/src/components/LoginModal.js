import LoginForm from './LoginForm.js';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Button } from '../styled-components/Button';
import { hideLoginModal } from '../features/loginModal/loginModalSlice';

const LoginModalContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background-color: white;
  border: 2px solid rgb(240, 240, 240);
  border-radius: 12px;
  position: absolute;
  width: 250px;
  top: 70px;
  left: calc(50% - 125px);
`;

export default function LoginModal () {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(hideLoginModal());
  }

  return (
    <LoginModalContainer>
      <Button onClick={onClose} style={{position: 'absolute', top: 10, right: 10}}>X</Button>
      <LoginForm />
    </LoginModalContainer>
  );
}