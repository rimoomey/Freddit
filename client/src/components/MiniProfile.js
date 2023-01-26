import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { UserNameLink } from '../styled-components/UserNameLink';

const ProfileDiv = styled.div`
  width: 100%;
`;

export default function MiniProfile() {
  const user = useSelector(state => state.user);
  
  return (
    <ProfileDiv>
      <h2>
        Welcome,{' '}
        <UserNameLink to={`/users/${user.id}`}>{user.username}</UserNameLink>
      </h2>
      <hr />
    </ProfileDiv>
  );
}