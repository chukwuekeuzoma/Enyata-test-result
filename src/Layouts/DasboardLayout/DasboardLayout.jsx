import React from "react";
import "./DashboardLayout.css";
import SideBar from "../../Components/SideBar/SideBar";
import Nav from "../../Components/Nav/Nav";

function DasboardLayout({ children }) {
  return (
    <div className="dashboardlayout_container">
      <div className="DBL_dashboardnav_container">
        <SideBar />
      </div>
      <div>
        <div className="DBL_children_container">
          <Nav />
        </div>
        <div className="DBL_children_container-two">{children}</div>
      </div>
    </div>
  );
}

export default DasboardLayout;
