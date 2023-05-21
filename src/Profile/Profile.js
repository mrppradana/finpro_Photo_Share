import React from "react";
import '../Profile/Profile.css'

const Profile = () => {
  const user = {
    username: "john_doe",
    name: "John Doe",
    bio: "Software Engineer | Photographer",
    followers: 1500,
    following: 100,
    posts: 200,
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="https://example.com/profile-picture.jpg"
          alt="Profile Picture"
          className="profile-picture"
        />
        <div className="profile-info">
          <h2 className="username">{user.username}</h2>
          <h3 className="name">{user.name}</h3>
          <p className="bio">{user.bio}</p>
        </div>
      </div>
      <div className="profile-stats">
        <div className="stats-item">
          <span className="stats-count">{user.posts}</span>
          <span className="stats-label">Posts</span>
        </div>
        <div className="stats-item">
          <span className="stats-count">{user.followers}</span>
          <span className="stats-label">Followers</span>
        </div>
        <div className="stats-item">
          <span className="stats-count">{user.following}</span>
          <span className="stats-label">Following</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
