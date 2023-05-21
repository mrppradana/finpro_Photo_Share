import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./Profile.css";
import { apiPhoto } from "../API/api";

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from API
    apiPhoto
      .get("/api/v1/user", )
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const {
    username,
    name,
    email,
    profilePictureUrl,
    phoneNumber,
    bio,
    website,
    totalFollowing,
    totalFollowers,
  } = userData;

  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__avatarContainer">
          {profilePictureUrl ? (
            <Avatar src={profilePictureUrl} alt="profile" />
          ) : (
            <Avatar alt="profile" />
          )}
        </div>
        <div className="profile__headerInfo">
          <h2>{username}</h2>
          <div className="profile__stats">
            <div>
              <span>{totalFollowers}</span> followers
            </div>
            <div>
              <span>{totalFollowing}</span> following
            </div>
          </div>
          <div className="profile__details">
            <h3>{name}</h3>
            <p>{bio}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Website: {website}</p>
          </div>
        </div>
      </div>
      {/* Add additional profile sections (e.g., posts, followers, following) */}
    </div>
  );
}

export default Profile;
