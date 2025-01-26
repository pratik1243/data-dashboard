import React from "react";
import menuBtnIcon from "../../assets/images/menu-btn-icon.png";
import sideBarIcon1 from "../../assets/images/side-bar-icon1.png";
import sideBarIcon2 from "../../assets/images/side-bar-icon2.png";
import sideBarIcon3 from "../../assets/images/side-bar-icon3.png";
import sideBarIcon4 from "../../assets/images/side-bar-icon4.png";
import sideBarIcon5 from "../../assets/images/side-bar-icon5.png";
import sideBarIcon6 from "../../assets/images/side-bar-icon6.png";
import sideBarIcon7 from "../../assets/images/side-bar-icon7.png";
import sideBarIcon8 from "../../assets/images/side-bar-icon8.png";
import sideBarIcon9 from "../../assets/images/side-bar-icon9.png";
import sideBarIcon10 from "../../assets/images/side-bar-icon10.png";
import sideBarIcon11 from "../../assets/images/side-bar-icon11.png";
import sideBarIcon12 from "../../assets/images/side-bar-icon12.png";

const SideBar = () => {
  const sideBarData = [
    {
      icon: menuBtnIcon,
    },
    {
      icon: sideBarIcon1,
    },
    {
      icon: sideBarIcon2,
    },
    {
      icon: sideBarIcon3,
    },
    {
      icon: sideBarIcon4,
    },
    {
      icon: sideBarIcon5,
    },
    {
      icon: sideBarIcon6,
    },
    {
      icon: sideBarIcon7,
    },
    {
      icon: sideBarIcon8,
    },
    {
      icon: sideBarIcon9,
    },
    {
      icon: sideBarIcon10,
    },
    {
      icon: sideBarIcon11,
    },
    {
      icon: sideBarIcon12,
    },
  ];

  return (
    <div className="sidebar-section">
      {sideBarData.map((ele, index) => {
        return (
          <div key={index} className='side-menu-item'>
            <img src={ele.icon} loading="lazy" />
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
