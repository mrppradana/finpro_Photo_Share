import React, { useState } from 'react';
import axios from 'axios';
import "./addComment.css";

const PostComment = () => {
  const [comment, setComment] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = JSON.stringify({
      "postId": "9a7f4133-2111-43b4-9d26-271e25b78679",
      "comment": comment
    });

    const token = localStorage.getItem('token'); // Mengambil token dari local storage
    console.log(token);

  const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/create-comment',
      headers: { 
        'apiKey': 'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b', 
        'Authorization': `Bearer ${token}`, // Menambahkan token ke header
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        // Tindakan setelah berhasil menambahkan komentar
        setSuccessMessage('Komentar berhasil ditambahkan');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="post-comment">
      <form onSubmit={handleSubmit}>
        <textarea value={comment} onChange={handleCommentChange} />
        <button type="submit">Post Comment</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default PostComment;
