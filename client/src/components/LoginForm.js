import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { login } from '../features/user/userSlice'
import { FormInput } from '../styled-components/FormInput'

const LoginUserContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  margin: 0.75em;
`

export default function LoginForm () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  function handleLoginUser (e) {
    e.preventDefault()
    fetch(`/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(r => {
      if (r.ok) {
        r.json().then(data => {
          dispatch(login(data))
        })
      } else {
        r.json().then(data => console.log(data.errors))
      }
    })
  }

  return (
    <LoginUserContainer onSubmit={e => handleLoginUser(e)}>
      <h3>Login</h3>
      <FormInput
        placeholder='username'
        type='text'
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <FormInput
        placeholder='password'
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <FormInput type='submit' value='Login' />
    </LoginUserContainer>
  )
}
