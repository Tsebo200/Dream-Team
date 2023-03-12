import React from "react";
import { Link } from "react-router-dom";

const Time = () => {
    return(
        <div>
            <h1>Timeline Page</h1>
            <Link to="/">Dashboard</Link>
            <Link to="/compare">Comparison</Link>
            <Link to="/time">Timeline</Link>
        </div>
    )
}

export default Time