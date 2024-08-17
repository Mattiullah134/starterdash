import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="w-full">
      <div className="w-[20%]">
        <SideBar />
      </div>
      <div className="sm:ml-64 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
