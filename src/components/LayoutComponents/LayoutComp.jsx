import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const LayoutComp = ({ children }) => {
  return (
    <div>
      <NavBar />
      <SideBar />
      {children}
    </div>
  );
};

export default LayoutComp;
