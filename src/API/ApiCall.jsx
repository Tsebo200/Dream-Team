import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

export function ApiCall(){

useEffect(()=>{

    axios.get('https://www.balldontlie.io/api/v1/players')
    .then((res)=>{
        const data = res.data
        console.log(res)
        console.log(data)
        

    })
    .catch((err)=>{
        console.log(err)
    })

}, [])


return(
    <>
  
    </>
)
}


// https://balldontlie.io/api/v1/players   ---> This is the all players Endpoint
// https://balldontlie.io/api/v1/players?search=lebron  ---> This is the search players Endpoint (This is searching for Lebron James)
// https://balldontlie.io/api/v1/players/237   ---> This is the player with a specific id