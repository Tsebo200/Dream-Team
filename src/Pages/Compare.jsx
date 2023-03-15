import React from "react";
import { Link } from "react-router-dom";
import '../Sass/graphs.sass';
// Tree Shaking import 
import { Chart, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);
{/* <Chart type='line' data={chartData} /> */}


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
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
  



const Compare = ()=>{

    return(
        <div>
            {/* <h1>Comparison Page</h1> */}
            <h2>How To Use</h2>
            <div className="pieBox">
            <Pie data={data} />
            </div>
            {/* <Link to="/">Dashboard</Link>
            <Link to="/compare">Comparison</Link>
            <Link to="/time">Timeline</Link> */}
           

        </div>
    )

}
export default Compare