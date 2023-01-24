import React from 'react';
import { createPortal } from 'react-dom';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';

import { hideLoginModal } from '../features/loginModal/loginModalSlice';

import Header from './Header';
import Sidebar from './Sidebar';
import LoginModal from './LoginModal';

export default function App () {
  const showLoginModal = useSelector(state => state.loginModal.show);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Sidebar />
      {showLoginModal && createPortal(
        <LoginModal onClose={() => dispatch(hideLoginModal())}/>,
        document.body
      )}
      <Outlet />
    </>
  );
}