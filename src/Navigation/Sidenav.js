import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ExploreIcon from "@mui/icons-material/Explore";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { apiPhoto } from "../API/api";
import { Link } from "react-router-dom";

function Sidenav() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  async function handleLogout(event) {
    event.preventDefault();

    apiPhoto
      .get("api/v1/logout", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        localStorage.removeItem("token");
        console.log(response);
        window.location.href = "/login"; // redirect
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={`sidenav ${isMobile ? "mobile" : ""}`}>
      <img
        className="sidenav__logo"
        src="https://i.pinimg.com/originals/93/44/05/934405098028ec3e84f2c8bf2507163c.jpg"
        alt="logo"
      />
      {isMobile && (
        <button className="sidenav__menu-btn">
          <MenuIcon />
        </button>
      )}
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>home</span>
        </button>
        <button className="sidenav__button">
          <Link to="/profile">
            <AccountCircleIcon />
            <span>Profile</span>
          </Link>
        </button>
        <button className="sidenav__button">
          <ExploreIcon />
          <span>search</span>
        </button>
        <button className="sidenav__button">
          <FavoriteIcon />
          <span>Likes</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Add Post</span>
        </button>
      </div>
      {!isMobile && (
        <div className="sidenav__more">
          <button className="sidenav__button" onClick={handleLogout}>
            <LogoutIcon />
            <span>Log Out</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Sidenav;
