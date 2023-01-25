import React from 'react'

import { Outlet } from 'react-router-dom'

import '../App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import LoginModal from './LoginModal'

export default function App () {
  return (
    <>
      <LoginModal />
      <Header />
      <Sidebar />
      <Outlet />
    </>
  )
}
