import React from "react";
import { Link } from "react-router-dom";



const Compare = ()=>{

    return(
        <div>
            <h1>Comparison Page</h1>
            <Link to="/">Dashboard</Link>
            <Link to="/compare">Comparison</Link>
            <Link to="/time">Timeline</Link>
        </div>
    )

}
export default Compare