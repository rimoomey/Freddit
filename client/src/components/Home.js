import React, { useEffect, useState } from 'react';

import PostList from './PostList';
import NavBar from './NavBar';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts')
      .then(r => {
        if (r.ok) {
          r.json().then(setPosts);
        } else {
          r.json().then(console.log);
        }
      })
  }, []);

  return (
    <main>
      <span>Popular posts</span>
      <NavBar />
      <hr />
      <PostList posts={posts} />
    </main>
  );
}