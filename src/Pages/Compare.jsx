import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import '../Sass/graphs.sass';
import '../Sass/compare.sass';
import '../Sass/styles.sass';
import ButtonDarkExample from "../components/Dropdown";
// Tree Shaking import 
import { Chart, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, ArcElement, Tooltip, Legend, CategoryScale, BarElement } from 'chart.js';
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

{/* <Chart type='line' data={chartData} /> */}







ChartJS.register(ArcElement, Tooltip, Legend);

const data2 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };



//   Bar Graph!!!!!!

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  



  

const Compare = ()=>{

  const [ballerName, setBallerName] = useState([])
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




  
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
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
 


    return(
        <div className="mainContent">
          

            {/* <h1>Comparison Page</h1> */}
            <h2 className="compareHeading">How To Use</h2>
            <div className="explainBlock">
            <p className="explanation">You may be wondering how to use this website well
              all you need to tap on the drop down to select a player,
              please keep note that the maximum players you may select at once is 3.
            </p>
            </div>
            <div className="graphContainer">

            <div className="barBox">
            <Bar options={options} data={data} />
            </div>
            <div className="pieBox">
            <Pie data={data2} />
            <ButtonDarkExample/>
            </div>
            
            <div className="dropdownContainer"></div>
            </div>
            


            {/* <Link to="/">Dashboard</Link>
            <Link to="/compare">Comparison</Link>
            <Link to="/time">Timeline</Link> */}
           

        </div>
    )

}
export default Compare