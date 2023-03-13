import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import NavBar from './components/Navbar';

import '../Sass/styles.sass';




const Landing = () => {

const leagueLeaders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const leagueLeaders = [1,2,3]

    return(
        <div className="mainContainer">
        <div className="header">
            <div className="logo"></div>
            <div className="spacingOne"></div>
           <h1>Dream Team</h1>
           <div className="userIcon"></div>
        </div>

    
       {/* <{NavBar} */}


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
                <p className="introText">Lorem ipsum dolor sit amet consectetur. Fusce porttitor ut venenatis phasellus commodo sit <br></br> faucibus. In nulla enim faucibus aliquet quam pellentesque nunc neque. Urna morbi sed lectus 
                malesuada ac facilisis. 
                Risus purus sed vestibulum hendrerit duis malesuada scelerisque id fermentum.</p>
            </div>
            

            {/* Chart Section */}
            <div className="chartsContainer">
                <div className="chartOneContainer">
                    <div className="chartOne"></div>
                </div>
                <div className="chartTwoContainer">
                    <div className="chartTwo"></div>
                </div>
            </div>


                        


        {/* Main Content Div */}
        </div>
        
         {/* Footer */}
         <div className="footer">
                <p className="footerDetails">© Dream Team 2023 Developed by Tsebo Ramonyalioa</p>
            </div>


        {/* Main Container closing */}
        </div>
    );

}
export default Landing


