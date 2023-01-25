import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled-components/Button'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { showLoginModal } from '../features/loginModal/loginModalSlice'
import logo from '../assets/fr-logo.png';

const Icon = styled.img`
  display: block;
  width: 100%;
  max-width: 5rem;
  margin: 0.5em 1em;
`

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--light-blue);
  border-bottom: 2px solid var(--button-blue);
`

const SignupDiv = styled.div`
  padding: 0 1em;
`

export default function Header () {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user) // user stores user state data

  return (
    <Head>
      <Link to='/'>
        <Icon
          src={logo}
          alt='icon'
        />
      </Link>
      {user && (
        <SignupDiv>
          {/* Signup OR Signout */}
          <p>Want to join all the swell chaps at Freddit? Sign up today!</p>
          <Button onClick={() => dispatch(showLoginModal())}>
            Become a Fredditor
          </Button>
        </SignupDiv>
      )}
    </Head>
  )
}