import React, { useState } from 'react'
import Sugesstion from './Sugesstion'
import Post from './Post'
import './Timeline.css'


function Timeline() {
  const [post, setpost] = useState([
    {
      user:"try",
      postImage:'',
      timespamp:'2d',
      likes: 123,
    },
    {
      user:"try2",
      postImage:'',
      timespamp:'2d',
      likes: 123,
    },
    {
      user:"try3",
      postImage:'',
      timespamp:'2d',
      likes: 125,
    },
    {
      user:"try4",
      postImage:'',
      timespamp:'2d',
      likes: 153,
    },
  ])
  return (
    <div className='timeline'>
      <div className='timeline__left'>
        <div className='timeline__posts'>
          {post.map((post) => (
            <Post user={post.user} likes={post.likes} />
          ))}
        </div>
      </div>
      <div className='timeline__right'>
        <Sugesstion/>
      </div>
    </div>
  )
}

export default Timeline