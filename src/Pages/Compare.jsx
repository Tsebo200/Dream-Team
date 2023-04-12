import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import '../Sass/graphs.sass';
import '../Sass/compare.sass';
import '../Sass/styles.sass';
import ButtonDarkExample from "../components/Dropdown";
import PolarAreaChart from "../components/Charts/PolarAreaChart";
import BarChart from "../components/Charts/BarChart";
import PieChart from "../components/Charts/PieChart";





  

const Compare = ()=>{
    return(
        <div className="mainContent">
          

            {/* <h1>Comparison Page</h1> */}
            <h2 className="compareHeading">How To Use</h2>
            <div className="explainBlock">
            <p className="explanation">You may be wondering how to use this website well
              all you need is to tap on the dropdown to select a player,
              please keep note that the maximum players you may select at once is 3.
            </p>
            </div>
            <div className="graphContainer">

            <center><div className="barBox">
            <BarChart/></div></center>

            <div className="pieBox">
            <PieChart/></div>
           
            <ButtonDarkExample/>
            <div className="radarBox">
            <PolarAreaChart />
            </div>
            
            <div className="dropdownContainer"></div>
            </div>
            
        </div>
    )

}
export default Compare