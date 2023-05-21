import React, { useState, useEffect } from "react";
import Sugesstion from "./Sugesstion";
import Post from "./Post";
import "./Timeline.css";

import { apiPhoto } from "../API/api";

function Timeline() {
  const [post, setpost] = useState([]);

  useEffect(() => {
    apiPhoto
      .get("/api/v1/explore-post?size=10&page=1", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setpost(response.data.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {post.map((post) => (
            <Post
              user={post.user?.username}
              likes={post.totalLikes}
              postImage={post.imageUrl}
              caption={post.caption}
              profilePictureUrl={post.user?.profilePictureUrl}
              postId={post.id}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <div className="suggestions__title">
          Suggestions for you
          {post.map((post) => (
            <Sugesstion
              user={post.user?.username}
              likes={post.totalLikes}
              postImage={post.imageUrl}
              caption={post.caption}
              profilePictureUrl={post.user?.profilePictureUrl}
              postId={post.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
