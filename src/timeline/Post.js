import React from "react";
import { Avatar } from "@mui/material";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CommentSection from "./CommentSection";

function Post({ user, likes, postImage}) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>T</Avatar>
          {user}
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img
          src={postImage}
          alt="pict"
        />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave"></div>
        </div>
        Liked by {likes} people
      </div>
      <CommentSection/>
    </div>
  );
}

export default Post;
