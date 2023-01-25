import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

function mapPosts(posts) {
  return posts.map(post => {
    return (
      <li key={post.id}>
        Title: {post.title}
        <p>Topic: {post.topic_name}</p>
      </li>
    )
  })
}

export default function Profile () {
  const [userName, setUserName] = useState('')
  const [posts, setPosts] = useState([])
  const user = useSelector(state => state.user)
  const { id } = useParams()
  useEffect(() => {
    fetch(`/users/${id}`).then(res => {
      if (res.ok) {
        console.log(res.json())
        res.json().then(data => {
          setUserName(data.username)
          setPosts(mapPosts(data.posts))
        })
      } else {
        console.log(res.errors)
      }
    })
  }, [id])
  return (
    <main>
      {userName === user.name ? <p>Currently Logged In</p> : <p>Currently Logged Out</p>}
      <h1>Current User</h1>
      <h2>{userName}</h2>
      <hr />
      <h1>Posts</h1>
      <ul>{posts}</ul>
      <hr />
    </main>
  )
}
