import React from "react";
import "./DetailsNav.css";
import account from "../../asset/Svg/account.svg";
import notifications from "../../asset/Svg/notifications-icon.svg";
import threedots from "../../asset/Svg/threedots.svg";
import chevron_right from "../../asset/Svg/chevron_right.svg";
import { useNavigate } from 'react-router-dom';

function DetailsNav(props) {
  const navigate = useNavigate();

  return (
    <div className="d-nav-container">
      <div className="d-nav-back-button d-nav-pointer" onClick={() => navigate(-1)}>
        <img src={chevron_right} alt="logo" />
        &nbsp;&nbsp;
        <div> Back </div>
      </div>
      <div className="d-nav-inner-container">
        <img
          src={notifications}
          alt="logo"
          className="d-nav-right nav-pointer"
        />
        <div className="h-line d-nav-right"></div>
        <img src={account} alt="logo" className="d-nav-right nav-pointer" />
        <div className="profile d-nav-right d-nav-pointer">
          <div>John Doe</div>
        </div>
        <img src={threedots} alt="logo" className="d-nav-pointer" />
      </div>
    </div>
  );
}

export default DetailsNav;
