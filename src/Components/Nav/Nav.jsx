import React from "react";
import "./Nav.css";
import account from "../../asset/Svg/account.svg";
import notifications from "../../asset/Svg/notifications-icon.svg";
import threedots from "../../asset/Svg/threedots.svg";


function Nav(props) {
  return (
    <div className="nav-container">
      <div className="nav-inner-container">
        <img src={notifications} alt="logo" className="nav-right nav-pointer"/>
        <div className="h-line nav-right"></div>
        <img src={account} alt="logo" className="nav-right nav-pointer"/>
        <div className="profile nav-right nav-pointer">
          <div>John Doe</div>
        </div>
        <img src={threedots} alt="logo" className="nav-pointer"/>
      </div>
    </div>
  );
}

export default Nav;
