import React from "react";
import { Link } from "react-router-dom";
import LineChart from "../components/Charts/LineChart";
import axios from "axios";
import {useEffect, useState} from "react";



const Time = () => {



    return(
        <div className="mainContent"> 
            <h1>Timeline Page</h1>
            <center> <div className="line-box">
            {/* <LineChart /> */}
            </div></center>


<select>
    <option><center>----Select----</center></option>
    <option>James Harden</option>
    <option>James Harden</option>
</select>

        </div>
    )
}

export default Time