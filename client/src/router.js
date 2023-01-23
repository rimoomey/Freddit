import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import Topic from './components/Topic';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: 'fr/:topic_name',
    element: <Topic />
  },
  {
    path: 'fr/:topic_name/:post_id',
    element: <Post />
  },
]);

export default router;