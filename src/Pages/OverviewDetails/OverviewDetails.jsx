import React from 'react';
import "./OverviewDetails.css"
import Cover from "../../asset/Svg/Cover.svg"

export default function OverviewDetails(props) {
    return (
        <div className="OverviewDetails-container">
             <img src={Cover} alt="logo"/>
            <div className="cover-container">
                <div className="cover">Cover</div>
                <br/>
                <div className="cover-conetent">Director: Kingsley Omin</div>
                <div>Producer: Kingsley Omin</div>
                <div>Release Date: January 24, 2022.</div>
            </div>
        </div>
    );
}
