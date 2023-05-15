import React from 'react'
import { Avatar } from '@mui/material'
import './Post.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


function Post({user, likes}) {
  return (
    <div className='post'>
      <div className='post__header'>
        <div className='post__headerAuthor'>
        <Avatar>T</Avatar>
        {user}
        </div>
        <MoreHorizIcon/>
      </div>
      <div className='post__image'>
        <img src="https://www.slashfilm.com/img/gallery/mobile-suit-gundam-the-witch-from-mercury-everything-we-know-so-far/when-could-the-witch-from-mercury-arrive-1648045120.webp" alt='pict'/>
      </div>
      <div className='post__footer'>
        <div className='post__footerIcons'>
          <div className='post__iconMain'>
            <FavoriteBorderIcon className='postIcon'/>
            <ChatBubbleIcon className='postIcon'/>
            <TelegramIcon className='postIcon'/>
          </div>
          <div className='post__iconSave'>
          </div>
        </div>
        Liked by {likes} people
      </div>
    </div>
  )
}

export default Post