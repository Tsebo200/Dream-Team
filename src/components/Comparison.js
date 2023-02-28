import React from "react";
import axios from "axios";
import './comparison.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Compare = () => {

    const [api, setApi] = useState([]);

    useEffect(() => {

        // When using link from postman remmeber:
        //  to add ---> www.
        // after --> //
        axios.get('https://www.balldontlie.io/api/v1/players')
        // https://www.balldontlie.io/api/v1/players
        .then((res)=> {
            setApi(res.data)
            console.log(res.data.data[4])

        })
        .catch((err) => {
            console.log(err)
        })

    }, [])



    return(
        <div className="nav-bar"></div>
    )
}
export default Compare



// axios.get('https://balldontlie.io/api/v1/stats')
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);  
// });