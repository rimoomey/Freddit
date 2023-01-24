import { createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Post from './components/Post';
import Topic from './components/Topic';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'fr/:topic_name',
        element: <Topic />
      },
      {
        path: 'fr/:topic_name/:post_id',
        element: <Post />
      },
    ]
  }
]);

export default router;