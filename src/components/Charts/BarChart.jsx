import {Bar} from 'react-chartjs-2';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, ArcElement, Tooltip, Legend, CategoryScale, BarElement } from 'chart.js';
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);


function BarChart() {

    const [ballerData, setBallerData] = useState('')



    // useEffect(() => {
  
    //   axios.get('https://www.balldontlie.io/api/v1/players')
    //   .then((res) => {
    //    setBallerName(res.data.data[4].first_name)
    //   //  console.log({ballerName})
    //    console.log(ballerName)
    //   })
    //    .catch((err) =>{
    //      console.log(err)
    //   })
     
    //  }, [])
   
  
     useEffect(() => {
  
     axios.get('https://www.balldontlie.io/api/v1/stats')
     .then((res) => {
        let data = res.data.data 
  
  
      // setBallerData(res.data.data[10].ast)
      // setBallerData(res.data.data[24].ast)
  
  
      const fieldGoalsAttempted = []
  
      for (let i = 0; i < data.length; i++) {
        fieldGoalsAttempted.push({ data: data[i].fga })
      }
      console.log(fieldGoalsAttempted)
  
      
  
      // setBallerData(res.data.data[0].fga)
      
      
      // let playerStats = 
      // setBallerData(res.data)
      // playerStats(res.data)
     //  console.log({ballerName})
      // ballerData.map((data) => res.data.data),
  
      console.log(ballerData)
     })
      .catch((err) =>{
        console.log(err)
     })
    
    },[ballerData])
  
  
  
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );


  
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'compare 3 playas',
      },
    },
  };
  
  const labels = ['Jan', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: ballerData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [ballerData, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
 

  return <Bar options={options} data={data}/>
}

export default BarChart