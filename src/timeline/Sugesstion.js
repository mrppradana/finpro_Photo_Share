import { Avatar } from "@mui/material";
import React from "react";
import "./Sugesstion.css";


function Suggestions({ user, profilePictureUrl, }) {
  return (
    <div className="suggestions">
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
            {profilePictureUrl ? (
              <Avatar src={profilePictureUrl} alt="profile" />
            ) : (
              <Avatar alt="profile" />
            )}
            </span>
            <div className="username__info">
              <span className="username">{user}</span>
              <span className="relation">New to PhotoShare</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;