import React, { useEffect, useState } from 'react';

import PostList from './PostList';
import NavBar from './NavBar';

export default function Home() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main>
      <span>Popular posts</span>
      <NavBar />
      <hr />
      <PostList posts={a} />
    </main>
  );
}