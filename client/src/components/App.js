import React from 'react';
import { createPortal } from 'react-dom';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoginModal from './LoginModal';

import '../App.css'
import Header from './Header'
import Sidebar from './Sidebar'

export default function App () {
  const showLoginModal = useSelector(state => state.loginModal.show);

  return (
    <>
      <Header />
      <Sidebar />
      {showLoginModal &&
        createPortal(
          <LoginModal />,
          document.body
        )
      }
      <Outlet />
    </>
  );
}