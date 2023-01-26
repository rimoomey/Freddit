import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/user/userSlice';

import '../App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import LoginModal from './LoginModal';

export default function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/me')
      .then(r => {
        if (r.ok) {
          r.json().then(data => dispatch(login(data)));
        }
      })
  }, []);

  return (
    <>
      <LoginModal />
      <Header />
      <Sidebar />
      <Outlet />
    </>
  )
}
