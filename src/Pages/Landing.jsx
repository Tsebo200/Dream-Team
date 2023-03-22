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
            <p className="introHeading">Welcome fellow NBA viewer or 2k Gamer I present to you lovely ballers</p>  <h2 className="dream-team-text">Dream Team</h2>
            <br></br>
            </div>
            <div className="textBlockTwo">
            <p className="introText"> Dream Team is an API driven React website that is based on an NBA API called BallDontLie,
            It has made NBA data consumption as easy as possible as it delivers the data with data visualiser called Chart.js which makes the data more interesting 
            as it has different chart types such as chart types: bar, line, area, pie, bubble, radar, polar, and scatter but Dream Team optimises on the line and bar graphs.<br></br>
            <br></br>
            Dream Team has an interactive feature where the visitor can tap on the dropdown to select specific NBA players in order to compare their stats and the stats will be displayed on a bar graph, FYI this feature will be found in the comparison page.<br></br>
            
            Well let me further explain on how this all works out, BallDontLie's data is being called with an get axios HTTP request which is also wrapped in a useEffect in order to constantly make calls without the webpage reloading, 
            once the data is called it is stored in react hook called a useState then the stats is displayed within a chart called Chart.js v4 with the first useState variable.<br></br> 
            
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


