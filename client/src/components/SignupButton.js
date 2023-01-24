import React from 'react'
import { useDispatch } from 'react-redux'

import { showLoginModal } from '../features/loginModal/loginModalSlice'
import { Button } from '../styled-components/Button'

export default function SignupButton () {
  const dispatch = useDispatch()

  return (
    <Button onClick={() => dispatch(showLoginModal())}>
      Become a Fredditor
    </Button>
  )
}
