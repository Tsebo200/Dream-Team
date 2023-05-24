import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function DropdownThree() {
  

    axios.get('https://www.balldontlie.io/api/v1/players')
    .then((res)=>{
        let data = res.data.data;
        console.log(data);
    })
    .catch((err )=>{

    })
    return (
        <>
return <option> </option>
    <div>DropdownThree</div>
    </>
  )
}

export default DropdownThree