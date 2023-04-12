import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {

  useEffect(()=>{
    axios.get("https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=140")
    .then((res)=>{
      let data = res.data.data[23]
      console.log(res)

    })
    .catch((err)=>{
      console.log(err)
    })
  })


   

    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'offensive Rebounds',
            data: [12, 19, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
             
            ],
            borderWidth: 1,
          },
        ],
      };

  return <Pie data={data}/>
}

export default PieChart


