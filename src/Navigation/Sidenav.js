import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { apiPhoto } from '../API/api';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  async function handleLogout(event) {
    event.preventDefault();

    apiPhoto
      .get('api/v1/logout', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        localStorage.removeItem('token');
        console.log(response);
        window.location.href = '/login'; // redirect
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    // <div className="sidebar">
    //   <img
    //     className="logo"
    //     src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
    //     alt="Instagram Logo"
    //   />
    //   <ul className="sidebar-menu">
    //     <li>
    //       <HomeIcon />
    //       <span>Home</span>
    //     </li>
    //     <li>
    //       <Link to="/profile">
    //         <AccountCircleIcon />
    //         <span>Profile</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <ExploreIcon />
    //       <span>Explore</span>
    //     </li>
    //     <li>
    //       <ChatIcon />
    //       <span>Messages</span>
    //     </li>
    //     <li>
    //       <FavoriteIcon />
    //       <span>Likes</span>
    //     </li>
    //     <li>
    //       <AddCircleOutlineIcon />
    //       <span>Add Post</span>
    //     </li>
    //   </ul>
    //   <div className="sidenav__more">
    //     <button className="sidenav__button" onClick={handleLogout}>
    //       <LogoutIcon />
    //       <span>Log Out</span>
    //     </button>
    //   </div>
    // </div>
		<div className="sidenav">
		<img
			className="sidenav__logo"
			src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
			alt="Instagram Logo"
		/>
		<div className="sidenav__buttons">
			<button className="sidenav__button">
				<HomeIcon />
				<span>Home</span>
			</button>
			<button className="sidenav__button">
				<ExploreIcon />
				<span>Explore</span>
			</button>
			<button className="sidenav__button">
				<ChatIcon />
				<span>Messages</span>
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
		<div className="sidenav__more">
			<button className="sidenav__button">
				<LogoutIcon />
				<span className="sidenav__buttonText">Log Out</span>
			</button>
		</div>
	</div>
);
};

export default Sidebar;
