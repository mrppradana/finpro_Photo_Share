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
import { Grid } from "@mui/material";

function Sidenav() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cek ukuran layar saat komponen pertama kali dirender
    handleResize();

    // Membersihkan event listener saat komponen akan di-unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  async function handleLogout(event) {
    event.preventDefault();

    apiPhoto
      .post("api/v1/logout", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        window.location.href = "/login"; // redirect
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sidenav">
      {isMobile ? (
        <div className="sidenav__header">
          <button className="sidenav__burger" onClick={toggleSidebar}>
            <MenuIcon />
          </button>
        </div>
      ) : null}
      {isSidebarOpen && (
        <div className="sidenav__content">
          <div className="sidenav__buttons">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <button className="sidenav__button">
                  <HomeIcon />
                  <span>home</span>
                </button>
              </Grid>
              <Grid item xs={12}>
                <button className="sidenav__button">
                  <AccountCircleIcon />
                  <span>Profile</span>
                </button>
              </Grid>
              <Grid item xs={12}>
                <button className="sidenav__button">
                  <ExploreIcon />
                  <span>explore</span>
                </button>
              </Grid>
              <Grid item xs={12}>
                <button className="sidenav__button">
                  <ChatIcon />
                  <span>Notification</span>
                </button>
              </Grid>
              <Grid item xs={12}>
                <button className="sidenav__button">
                  <FavoriteIcon />
                  <span>Likes</span>
                </button>
              </Grid>
              <Grid item xs={12}>
                <button className="sidenav__button">
                  <AddCircleOutlineIcon />
                  <span>Add Post</span>
                </button>
              </Grid>
            </Grid>
          </div>
          <div className="sidenav__more">
            <button className="sidenav__button" onClick={handleLogout}>
              <LogoutIcon />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidenav;
