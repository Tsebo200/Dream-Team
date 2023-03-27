import React from "react";
import { Link } from "react-router-dom";
import LineChart from "../components/Charts/LineChart";

const Time = () => {
    return(
        <div className="mainContent"> 
            <h1>Timeline Page</h1>
            <LineChart />
        </div>
    )
}

export default Time