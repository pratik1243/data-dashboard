import React from "react";
import listIcon from "../../assets/images/list-icon-btn.png";
import speakerIcon from "../../assets/images/speaker-icon.png";
import profileNavIcon from "../../assets/images/nav-profile-icon.png";
import notificationIcon from "../../assets/images/notification-icon.png";
import searchIcon from "../../assets/images/search-icon.svg";

const NavBar = () => {
  return (
    <div className="navbar-section">
      <span className="nav-head-txt">TECHYON</span>

      <div>
        <ul className="nav-menu-list-sec">
          <li>
            <img src={searchIcon} loading="lazy" />
          </li>
          <li>
            <img src={listIcon} loading="lazy" />
          </li>
          <li>
            <img src={speakerIcon} loading="lazy" />
          </li>
          <li>
            <button className="notification-btn">
              <img src={notificationIcon} loading="lazy" />

              <span className="badge">+99</span>
            </button>
          </li>
          <li>
            <img src={profileNavIcon} className="nav-profile-btn" loading="lazy" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
