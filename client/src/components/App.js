import '../App.css';
import { useState } from'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';

export default function App () {
  const [user, setUser] = useState(null)
  return (
    <>
      <Header user={user} setUser={setUser}/>
      <Sidebar />
      <Outlet />
    </>
  );
}