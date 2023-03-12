import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import '../Sass/styles.sass';



const Landing = () => {

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

        </div>
        <div className="main-content">
            <h2>League Leaders</h2>
            <div class
        </div>
        </div>
    )

}
export default Landing


