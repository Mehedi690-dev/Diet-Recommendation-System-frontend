import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import "./navbar.css";




const nav = () => {
  let iconStyles = { color: "white", fontSize: "15px"};
  let iconStylesNotification = { color: "white", fontSize: "20px"};
  let iconStylesRed = { color: "#FE0000", fontSize: "15px"};
  const userInfo = JSON.parse(localStorage.getItem('userinfo')) || {};
  const { name, username, email, phone, password, image } = userInfo;
  const handleLogout = () => {
    // Clear local storage data
    localStorage.clear();
    // Redirect to login page
    window.location.href = "/login";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            NutrifyXpert
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/diet">
                  Diet Plan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  {image ? (
                    <div className='profile_img_icon'>
                      <img src={`http://localhost:3000${image}`} alt="" width="100%" height="100%"/>
                    </div>
                  ) : (
                    <FaUser style={iconStyles} />
                  )}
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={handleLogout} style={{ cursor: "pointer" }}>
                  <IoLogOutOutline style={iconStylesRed} />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default nav