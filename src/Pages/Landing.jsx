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
                    <div className="cardSpacer"></div>
                    </>
                    ); })}
            </div>
        </div>

        {/* Introduction */}
        <div className="introContainer">
            <h2 className="introHeading">Introduction</h2>
            
            <center><p className="introText">Welcome fellow NBA viewer or 2k Gamer I present to you lovely ballers,</p></center><br></br>
            <div className="text-block"></div>
            <p className="introText"> Dream Team is an API driven React website that is based on an NBA API called BallDontLie, Dream Team has made NBA data consumption as easy as possible,
            as it delivers the data with Chart.js which makes the site interactive for the visitor.
            
            Dream Team is where we deliver NBA Data as easy and consumable as possible for you to process with the aid of Chart.js. 
            
            Well let me explain how this all works out<br></br> 
            
            We hope you find the viewing experience of the NBA statistics fantastic and entertaining</p>
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


