import '../App.css';
import { RouterProvider } from 'react-router-dom';
import router from '../router';

import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <>
      <Header />
      <Sidebar />

      <RouterProvider router={router} />
    </>
  );
}

export default App;
