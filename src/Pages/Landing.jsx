import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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

    
        <div className="vertNavBar">
            <div className="navSpacerOne"></div>
            <br></br>
            <Link to="/"><h2><ion-icon name="basketball-outline"></ion-icon>Dashboard</h2></Link>
            <br></br>
            <Link to="/compare"><h2> <ion-icon name="basketball-outline"></ion-icon>Comparison</h2></Link>
            <br></br>
            <Link to="/time"><h2> <ion-icon name="basketball-outline"></ion-icon>Timeline</h2></Link>
            <div className="navSpacerTwo"></div>
            <Link to="/signedout"><h2 className="signOutText"><ion-icon  name="log-out-outline"></ion-icon>Sign Out</h2></Link>
        </div>{/* VerNavBar Closing Tag */}


        <div className="main-content">
            <h2 className="leagueLeadersText">League Leaders</h2>
            <div className="leagueLeadersHolder">
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
                    );
                })}

            </div>
                {/* Introduction */}
                <div className="introContainer">
                <h2 className="introHeading">Introduction</h2>
                <p className="introText">Lorem ipsum dolor sit amet consectetur. Fusce porttitor ut venenatis phasellus commodo sit <br></br> faucibus. In nulla enim faucibus aliquet quam pellentesque nunc neque. Urna morbi sed lectus 
                malesuada ac facilisis. 
                Risus purus sed vestibulum hendrerit duis malesuada scelerisque id fermentum.</p>
                </div>

                

        </div>


        {/* Main Container closing */}
        </div>
    );

}
export default Landing


