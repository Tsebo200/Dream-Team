import React from "react";
import { Link } from "react-router-dom";
import LineChart from "../components/Charts/LineChart";



const Time = () => {
    return(
        <div className="mainContent"> 
            <h1>Timeline Page</h1>
            <center> <div className="line-box">
            <LineChart />
            </div></center>
        </div>
    )
}

export default Time