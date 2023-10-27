import React from "react";
import { Link } from "react-router-dom";
import LineChart from "../components/Charts/LineChart";
import axios from "axios";
import {useEffect, useState} from "react";



const Time = () => {

    const [selectedYear, setSelectedYear] = useState(2023);

    return(
        <div className="mainContent"> 
            <h1>Timeline Page</h1>
            <center> <div className="line-box">
            <LineChart selectedYear={selectedYear} />
            </div></center>

{/* 
<select>
    <option><center>----Select----</center></option>
    <option>James Harden</option>
    <option>James Harden</option>
</select> */}

<select onChange={(e) => setSelectedYear(e.target.value)}>
    <option value="2023">2023</option>
    <option value="2018">2018</option>
    <option value="2017">2017</option>
    <option value="2016">2016</option>
    <option value="2015">2015</option>
    <option value="2014">2014</option>
    <option value="2013">2013</option>
    <option value="2012">2012</option>
    <option value="2011">2011</option>
    <option value="2010">2010</option>
    <option value="2009">2009</option>
    <option value="2008">2008</option>
    <option value="2007">2007</option>
    <option value="2003">2003</option>
    <option value="2000">2000</option>
    <option value="1996">1996</option>
</select>

        </div>
    )
}

export default Time