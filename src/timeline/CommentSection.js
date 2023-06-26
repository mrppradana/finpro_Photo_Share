import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./addComment"
import './CommentSection.css';
import { AddComment } from '@mui/icons-material';


const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Memuat komentar saat komponen dimuat
    loadComments();
  }, []);

  const loadComments = () => {
    axios
      .get('https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/comments', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setComments(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddComment = () => {
    axios
      .post(
        'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/create-comment',
        {
          postId: '9a7f4133-2111-43b4-9d26-271e25b78679',
          comment: commentText,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        // Memuat ulang komentar setelah menambahkan komentar baru
        loadComments();
        setCommentText('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="comment-section">
      <div className="comments">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p className="comment-text">{comment.comment}</p>
            <p className="comment-author">{comment.user.username}</p>
          </div>
        ))}
      </div>
      <div>
        < AddComment />
      </div>
    </div>
  );
};

export default CommentSection;
