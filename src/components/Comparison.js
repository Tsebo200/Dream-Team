import React from "react";
import axios from "axios";
import './comparison.css';
import './styles.sass';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Compare = () => {

    const [api, setApi] = useState([]);

    useEffect(() => {

        // When using link from postman remember:
        //  to add ---> www.
        // after --> //
        axios.get('https://www.balldontlie.io/api/v1/players')
        // https://www.balldontlie.io/api/v1/players
        .then((res)=> {
            setApi(res.data.data[4].first_name)
            console.log(res.data.data[4].first_name)
            console.log(res.data.data[4])
            // console.log("Length", res.data.length);

        })
        .catch((err) => {
            console.log(err)
        })

    }, [])



    return(
            <div className="nav-bar">
            <p>
                Here is {api}
            </p>
            </div>
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