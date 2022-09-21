import React from "react";
import "./OverviewDetails.css";
import Cover from "../../asset/Svg/Cover.svg";
import DeathStar from "../../asset/Svg/deathStar.svg";
import { useParams } from "react-router-dom";

export default function OverviewDetails(props) {
  const { id } = useParams();

  return (
    <div className="OverviewDetails-container">
      {id === "overview" ? 
        <>
          <img src={Cover} alt="logo" />
          <div className="cover-container">
            <div className="cover">Cover</div>
            <br />
            <div className="cover-conetent">Director: Kingsley Omin</div>
            <div>Producer: Kingsley Omin</div>
            <div>Release Date: January 24, 2022.</div>
          </div>
        </>
       : 
        <>
          <img src={DeathStar} alt="logo" />
          <div className="cover-container">
            <div className="cover">Death Star</div>
            <br />
            <div className="cover-conetent">Model: DS-1 Orbital Battle Station</div>
            <div>Passengers: 22</div>
            <div>Pilots: Dior, Kingley, Jamal.</div>
          </div>
        </>
      }
    </div>
  );
}
