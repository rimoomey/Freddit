import '../App.css';
import { RouterProvider } from 'react-router-dom';
import router from '../router';

function App() {
  return (
    <>
      <div>App</div>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
