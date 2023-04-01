import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function OneAxiosPartTwo() {



    axios.get('https://www.balldontlie.io/api/v1/players')
    .then((res)=>{
        let data = res.data.data
        var playerId = [];


        // for (let i = 0; data.length; i++){
        //     playerId.push({id: data.id});
        // }


        console.log(data)
    })
    .catch((err)=>{

    })





  return (
    <>
    <div>OneAxiosPartTwo</div>
    {/* <h3>{playerId}</h3> */}
    </>
  )
}

export default OneAxiosPartTwo