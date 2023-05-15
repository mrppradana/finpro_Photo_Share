import React, { useState, useEffect } from "react";
import Sugesstion from "./Sugesstion";
import Post from "./Post";
import "./Timeline.css";

import { apiPhoto } from "../API/api";

function Timeline() {
  const [post, setpost] = useState([
    // {
    //   id: "try",
    //   imageUrl: "https://www.slashfilm.com/img/gallery/mobile-suit-gundam-the-witch-from-mercury-everything-we-know-so-far//////when-could-the-witch-from-mercury-arrive-1648045120.webp",
    //   timespamp: "2d",
    //   totalLikes: 123,
    // }
  ]);

  useEffect(()=>{
    apiPhoto.get('/api/v1/explore-post?size=10&page=1', {headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }})
    .then((response) => {
      setpost(response.data.data.posts);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {post.map((post) => (
            <Post user={post.user.username} likes={post.totalLikes} postImage={post.imageUrl} />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Sugesstion />
      </div>
    </div>
  );
}

export default Timeline;
