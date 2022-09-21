import React, { useState } from "react";
import Starwars2 from "../../asset/Svg/Starwars2.svg";
import OverviewIcon from "../../asset/Svg/OverviewIcon.svg";
import "./SideBar.css";

export default function SideBar(props) {
  const [active, setActive] = useState("");
 
  return (
    <div className="DBN_container">
      <div className="DBN_options_container">
        <div className="DBN_Starwars">
          <img src={Starwars2} alt="logo" />
        </div>
        <div className="DBN_icon_container">
          <div
            onClick={() => setActive("DashboardIcon")}
            className={
              active === "DashboardIcon"
                ? "DBN_icon_container_select_active"
                : "DBN_icon_container_select"
            }
          >
            <img src={OverviewIcon} alt="logo" />
            <span>
              <span style={{ opacity: "0" }}>..</span>Overview
            </span>
          </div>
        </div>
        <div className="DBN_icon_container-two">
          <div
            onClick={() => setActive("Overview")}
            className={
              active === "Overview"
                ? "DBN_icon_container_select_active"
                : "DBN_icon_container_select"
            }
          >
            <div className="box-icon"></div>
            <span>
              <span style={{ opacity: "0" }}>..</span>Starships
            </span>
          </div>
          <div
            onClick={() => setActive("Starships")}
            className={
              active === "Starships"
                ? "DBN_icon_container_select_active"
                : "DBN_icon_container_select"
            }
          >
            <div className="box-icon-2"></div>
            <span>
              <span style={{ opacity: "0" }}>......</span>People
            </span>
          </div>
          <div
            onClick={() => setActive("People")}
            className={
              active === "People"
                ? "DBN_icon_container_select_active"
                : "DBN_icon_container_select"
            }
          >
            <div className="box-icon-3"></div>
            <span>
              <span style={{ opacity: "0" }}>....</span>Species
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
