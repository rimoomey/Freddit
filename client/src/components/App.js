import '../App.css'
import { RouterProvider} from 'react-router-dom'
import { createPortal } from 'react-dom'
import router from '../router'
import { useState } from'react'

import Header from './Header'
import Sidebar from './Sidebar'
import LoginModal from './LoginModal'

function App () {
  const [showLoginModal, setShowLoginModal] = useState(false)
  return (
    <>
      <Header setShowLoginModal={setShowLoginModal}/>
      <Sidebar />
      {showLoginModal && createPortal(
        <LoginModal onClose={() => setShowLoginModal(false)}/>,
        document.body
      )}
      <RouterProvider router={router} />
    </>
  )
}

export default App
