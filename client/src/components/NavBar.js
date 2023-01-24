import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: inline-block;
  margin-left: 2rem;
`;

export default function NavBar() {
  const items = ['flatiron', 'coding', 'duck_pictures', 'reddit_h8rs'];

  return (
    <Nav>
      {items.map((n, i) =>
        <>
          {i > 0 ? <span> | </span> : ''}
          <NavLink key={i} to={`/fr/${n}`}>{n}</NavLink>
        </>
      )}
    </Nav>
  );
}