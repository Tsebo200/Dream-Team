import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import '../Sass/styles.sass';



const Landing = () => {

    return(
        <div className="main-container">
        <div className="header">
            <div className="logo"></div>
            <div className="spacing-one"></div>
           <h1>Dream Team</h1>
           <div className="user-icon"></div>
        </div>

        <div className="vert-nav-bar">

            <Link to="/">Dashboard</Link>
            <Link to="/compare">Comparison</Link>
            <Link to="/time">Timeline</Link>

        </div>
        <div className="main-content"></div>
        </div>
    )

}
export default Landing


