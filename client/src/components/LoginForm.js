import React, { useState } from 'react'
import styled from 'styled-components'
import { FormInput } from '../styled-components/FormInput'

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  margin: 0.75em;
`

export default function LoginForm ({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  function handleNewUser (e) {
    e.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      })
    })
      .then(r => r.json())
      .then(data => console.log(data))
  }
  return (
    <LoginContainer onSubmit={e => handleNewUser(e)}>
      <h1>Signup for Freddit</h1>
      <label htmlFor='username'>Username</label>
      <FormInput
        placeholder='fredditor_#1'
        type='text'
        id='username'
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <FormInput
        placeholder='Sup3rS3cretP@ss'
        type='password'
        id='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password_confirmation'>Confirm Password</label>
      <FormInput
        placeholder='Sup3rS3cretP@ss'
        type='password'
        id='password_confirmation'
        value={passwordConfirmation}
        onChange={e => setPasswordConfirmation(e.target.value)}
      />
      <FormInput type='submit' value='Login' />
    </LoginContainer>
  )
}
