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
              all you need to tap on the drop down to select a player,
              please keep note that the maximum players you may select at once is 3.
            </p>
            </div>
            <div className="graphContainer">

            <div className="barBox">
            <BarChart/>
            </div>
            <div className="pieBox">
            <PieChart/>
            <ButtonDarkExample/>
            </div>
            
            <div className="dropdownContainer"></div>
            <PolarAreaChart />;
            </div>
            


            {/* <Link to="/">Dashboard</Link>
            <Link to="/compare">Comparison</Link>
            <Link to="/time">Timeline</Link> */}
           

        </div>
    )

}
export default Compare