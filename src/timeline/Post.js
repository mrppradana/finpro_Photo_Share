import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import TelegramIcon from "@mui/icons-material/Telegram";
import { apiPhoto } from "../API/api";

function Post({ user, likes, postImage, profilePictureUrl, caption, postId }) {
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Update the like count and isLiked state when 'likes' prop changes
    setLikeCount(likes);
    setIsLiked(false);
  }, [likes]);

  const handleLike = () => {
    if (isLiked) {
      // Send request to unlike the post
      apiPhoto
        .post(`/api/v1/unlike`, { postId })
        .then((response) => {
          setLikeCount(likeCount - 1);
          setIsLiked(false);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Send request to like the post
      apiPhoto
        .post("/api/v1/like", { postId })
        .then((response) => {
          setLikeCount(likeCount + 1);
          setIsLiked(true);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      apiPhoto
        .post("/api/v1/create-comment", {
          postId,
          comment: comment.trim(),
        })
        .then((response) => {
          setComments((prevComments) => [...prevComments, response.data]);
          setComment("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <div className="avatar-container">
            {profilePictureUrl ? (
              <Avatar src={profilePictureUrl} alt="profile" />
            ) : (
              <Avatar alt="profile" />
            )}
          </div>
          {user}
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="pict" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconMain">
            <FavoriteIcon
              className={`postIcon ${isLiked ? "liked" : ""}`}
              onClick={handleLike}
            />
            <ChatBubbleIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave"></div>
        </div>
        Liked by {likeCount} people
        <div>
          <span className="userCaptionId">{user}</span>{" "}
          <span className="userCaption">{caption}</span>
        </div>
        <div className="post__comments">
          {comments.map((comment) => (
            <div key={comment.commentId} className="post__comment">
              <span className="comment__user">{comment.user}</span>{" "}
              <span className="comment__text">{comment.comment}</span>
            </div>
          ))}
        </div>
        <div className="post__addComment">
          <input
            type="text"
            className="addComment__input"
            placeholder="Add a comment..."
            value={comment}
            onChange={handleCommentChange}
          />
          <button className="addComment__button" onClick={handleAddComment}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
