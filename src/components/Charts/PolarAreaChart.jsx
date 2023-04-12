import React from 'react'
import {Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

function PolarAreaChart() {

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Height of Playas',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};
    return <PolarArea data={data} />;
}

export default PolarAreaChart