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

        <ion-icon name="basketball-outline"></ion-icon>
            <Link to="/"><h2>Dashboard</h2></Link>
            <Link to="/compare"><h2>Comparison</h2></Link>
            <Link to="/time"><h2>Timeline</h2></Link>

            <Link to="/signout"><h2 className="signOutText">Sign Out</h2></Link>

        </div>
        <div className="main-content"></div>
        </div>
    )

}
export default Landing


