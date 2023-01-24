import React, {useState} from 'react'
import { createPortal } from 'react-dom'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import LoginModal from './LoginModal'
import { hideLoginModal } from '../features/loginModal/loginModalSlice'

import '../App.css'
import Header from './Header'
import Sidebar from './Sidebar'

export default function App () {
  const [user, setUser] = useState(null)
  const showLoginModal = useSelector(state => state.loginModal.show)
  const dispatch = useDispatch()

  return (
    <>
      <Header user={user} />
      <Sidebar />
      {showLoginModal &&
        createPortal(
          <LoginModal
            setUser={setUser}
            onClose={() => dispatch(hideLoginModal())}
          />,
          document.body
        )}
      <Outlet />
    </>
  )
}
