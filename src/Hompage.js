import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Sidenav from "./Navigation/Sidenav";
import Timeline from "./timeline/Timeline";
import MenuIcon from "@mui/icons-material/Menu";

function Homepage() {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial sidebar state based on window width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="homepage">
      {window.innerWidth <= 768 && (
        <button className="burgerMenu" onClick={handleToggleSidebar}>
          <MenuIcon />
        </button>
      )}
      <div className={`homepage__nav ${showSidebar ? "showSidebar" : ""}`}>
        <Sidenav />
      </div>
      <div className={`homepage__timeline ${showSidebar ? "showSidebar" : ""}`}>
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
