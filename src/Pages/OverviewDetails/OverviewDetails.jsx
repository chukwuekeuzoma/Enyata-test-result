import React from "react";
import "./OverviewDetails.css";
import Cover from "../../asset/Svg/Cover.svg";
import DeathStar from "../../asset/Svg/deathStar.svg";
import people from "../../asset/Svg/people.svg";
import Species from "../../asset/Svg/Species.svg";
import { useParams } from "react-router-dom";

export default function OverviewDetails(props) {
  const { id } = useParams();

  return (
    <div className="OverviewDetails-container">
      {id === "overview" ? (
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
      ) : id === "starship" ? (
        <>
          <img src={DeathStar} alt="logo" />
          <div className="cover-container">
            <div className="cover">Death Star</div>
            <br />
            <div className="cover-conetent">
              Model: DS-1 Orbital Battle Station
            </div>
            <div>Passengers: 22</div>
            <div>Pilots: Dior, Kingley, Jamal.</div>
          </div>
        </>
      ) : id === "people" ? (
        <>
          <img src={people} alt="logo" />
          <div className="cover-container">
            <div className="cover">Shank Comics</div>
            <br />
            <div className="cover-conetent">Gender: Female</div>
            <div>Year of birth: January 24, 1922.</div>
            <div>Year of birth: January 24, 1922.</div>
            <div>Height: 150CM</div>
          </div>
        </>
      ) : (
        <>
          <img src={Species} alt="logo" />
          <div className="cover-container">
            <div className="cover">Wookie</div>
            <br />
            <div className="cover-conetent">Designation: Sentient</div>
            <div>Language: Shyriiwook</div>
            <div>Language: Shyriiwook</div>
            <div>Average Lifespan: 400</div>
          </div>
        </>
      )}
    </div>
  );
}
