import React from 'react';
import DetailsNav from "../../Components/DetailsNav/DetailsNav"
import SideBar from "../../Components/SideBar/SideBar";
import "./DetailsLayout.css"

export default function DetailsLayout({children}) {
    return (
        <div className="detailslayout_container">
      <div className="DSL_dashboardnav_container">
        <SideBar />
      </div>
      <div>
        <div className="DSL_children_container">
          <DetailsNav />
        </div>
        <div className="DSL_children_container-two">{children}</div>
      </div>
    </div>
    );
}
