import React from "react";
import StarWars from "../../asset/Svg/StarWars.svg";
import "./Loginsidebar.css";

export default function Loginsidebar(props) {
  return (
    <div className="LISB-Conatiner">
      <div className="LISB_options_container">
        <div className="LISB_Starwars">
          <img src={StarWars} alt="logo" />
        </div>
      </div>
    </div>
  );
}
