import '../App.css';
import { createPortal } from 'react-dom';
import { useState } from'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import LoginModal from './LoginModal';

export default function App () {
  const [showLoginModal, setShowLoginModal] = useState(false)
  return (
    <>
      <Header setShowLoginModal={setShowLoginModal}/>
      <Sidebar />
      {showLoginModal && createPortal(
        <LoginModal onClose={() => setShowLoginModal(false)}/>,
        document.body
      )}
      <Outlet />
    </>
  );
}