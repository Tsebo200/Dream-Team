import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import NavBar from './components/Navbar';
import '../Sass/styles.sass';

// const [] = useState
const leagueLeaders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const leagueLeaders = [1,2,3]

const Landing = () => {

    return(
<div className="mainContent">
        <div className="leagueLeadersContainer">
        <h2 className="leagueLeadersText">League Leaders</h2>
            <div className="cardScrollContainer">
                {leagueLeaders.map((number) => {
                    return (
                    <>
                    <div className="cardContainer">
                        <div className="cardNumber"></div>
                        <div className="playerIcon"></div>
                        <p>KD</p>
                        <p>29.4</p>
                    </div>
                    </>
                    ); })}
            </div>
        </div>

        {/* Introduction */}
        <div className="introContainer">
            <h2 className="introductionText">Introduction</h2>
            
           
            <div className="textBlockOne">
            <h4 className="introHeading">Welcome fellow NBA viewer or 2k Gamer I present to you lovely ballers,</h4>  <h2 className="dream-team-text">Dream Team</h2>
            <br></br>
            </div>
            <div className="textBlockTwo">
            <p className="introText"> Dream Team is an API driven React website that is based on an NBA API called BallDontLie,
            It has made NBA data consumption as easy as possible as it delivers the data with data visualiser called Chart.js which makes the data more interesting 
            as it has different chart types such as chart types: bar, line, area, pie, bubble, radar, polar, and scatter but Dream Team optimises on the line and bar graphs.<br></br>
            Dream Team has an interactive feature where the visitor can tap on the dropdown to select a specific NBA player.<br></br>
            
            Dream Team is where we deliver NBA Data as easy and consumable as possible for you to process with the aid of Chart.js. 
            
            Well let me explain how this all works out<br></br> 
            
            We hope you find the viewing experience of the NBA statistics fantastic and entertaining</p>
            </div>
        </div>
        

        {/* Chart Section */}
        {/* <div className="chartsContainer">
            <div className="chartOneContainer">
                <div className="chartOne"></div>
            </div>
            <div className="chartTwoContainer">
                <div className="chartTwo"></div>
            </div>
        </div> */}
      
    {/* Main Content Div Close */}
    </div> 

        // <div className="mainContainer">
        // {/* <div className="header">
        //     <div className="logo"></div>
        //     <div className="spacingOne"></div>
        //    <h1>Dream Team</h1>
        //    <div className="userIcon"></div>
        // </div> */}

    

        // {/* Main Container closing */}
        // </div>
    );
}
export default Landing


