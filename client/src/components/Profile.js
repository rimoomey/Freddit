import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function mapPosts (posts) {
  return posts.map(post => {
    return (
      <li key={post.id}>
        <h3>
          Title:{' '}
          <Link to={`/fr/${post.topic_name}/${post.id}`}>{post.title}</Link>
        </h3>
        <h3>
          Topic: <Link to={`/fr/${post.topic_name}`}>{post.topic_name}</Link>
        </h3>
      </li>
    )
  })
}

export default function Profile () {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [posts, setPosts] = useState([])
  const user = useSelector(state => state.user)
  const { id } = useParams()
  useEffect(() => {
    fetch(`/users/${id}`).then(res => {
      if (res.ok) {
        res.json().then(data => {
          setUserName(data.username)
          userName === user.username
            ? setUserEmail(data.email)
            : setUserEmail('')
          setPosts(mapPosts(data.posts))
        })
      } else {
        console.log(res.errors)
      }
    })
    // eslint-disable-next-line
  }, [])
  return (
    <main>
      {userName === user.username ? (
        <>
          <p>🟢 Logged In As...</p>
          <h3>Email: {userEmail}</h3>
          <hr />
        </>
      ) : (
        <p>🟡 Viewing User...</p>
      )}
      <h1>{userName}</h1>
      <hr />
      <h3>Posts</h3>
      <ol>{posts}</ol>
      <hr />
    </main>
  )
}
