import React from 'react'
import './Sugesstion.css'
import { Avatar } from '@mui/material'

function Sugesstion() {
  return (
    <div className='sugesstion'>
      <div className='sugesstion__title'> Following</div>
      <div className='sugesstion__usernames'>
        {/*  */}
          <div className='sugesstion__username'>
            <div className='username_left'>
              <span className='avatar'>
                <Avatar>r</Avatar>
              </span>
              <div className='username__info'>
                <span className='username'>Test1</span>
              </div>
            </div>
          <button className='follow_button'>Follow</button>
          </div>
        {/*  */}
        <div className='sugesstion__username'>
            <div className='username_left'>
              <span className='avatar'>
                <Avatar>r</Avatar>
              </span>
              <div className='username__info'>
                <span className='username'>Test1</span>
              </div>
            </div>
          <button className='follow_button'>Follow</button>
          </div>
          {/*  */}
          <div className='sugesstion__username'>
            <div className='username_left'>
              <span className='avatar'>
                <Avatar>r</Avatar>
              </span>
              <div className='username__info'>
                <span className='username'>Test1</span>
              </div>
            </div>
          <button className='follow_button'>Follow</button>
          </div>
          {/*  */}
          <div className='sugesstion__username'>
            <div className='username_left'>
              <span className='avatar'>
                <Avatar>r</Avatar>
              </span>
              <div className='username__info'>
                <span className='username'>Test1</span>
              </div>
            </div>
          <button className='follow_button'>Follow</button>
          </div>
          {/*  */}
      </div>
    </div>
  )
}

export default Sugesstion