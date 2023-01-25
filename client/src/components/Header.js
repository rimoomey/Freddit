import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled-components/Button'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { showLoginModal } from '../features/loginModal/loginModalSlice'

const Icon = styled.img`
  display: block;
  width: 100%;
  max-width: 5rem;
  margin: 0 1em;
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
          src='https://play-lh.googleusercontent.com/nlptFyxNsb8J0g8ZLux6016kunduV4jCxIrOJ7EEy-IobSN1RCDXAJ6DTGP81z7rr5Zq'
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
