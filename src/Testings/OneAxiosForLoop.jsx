import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { ApiCall } from '../API/ApiCall';
import Button from 'react-bootstrap/Button';

function OneAxiosForLoop() {

const [apiId, setApiId] = useState([])
ApiCall.map((data) => data[0])

axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=')


// var playerLink = ("https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=" + playerId[0])

 let playerId = [140, 15, 246, 490, 115, 268, 434, 125, 132, 172]
 .map(playerId)

  useEffect(()=>{
  axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=20'+ playerId[0])
  .then((res)=> {
  const data = res.data.data
  
  
  // Trying to filter array of ids 
    // for (let i = 0; data.length; i++){
    // }
    console.log(data)
  })
  .catch((err)=>{
    console.log(err)
  })

}, [])
console.log({ApiCall})
  return (
    <div>OneAxiosForLoop</div>
  )
}

export default OneAxiosForLoop