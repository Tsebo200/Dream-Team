import React, { useEffect, useState } from 'react'
import {Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import axios from 'axios';

function PolarAreaChart({selectedPlayer, secondPlayer}) {

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const [playerHeight, setPlayerHeight] = useState(null);
const [secondPlayerHeight, setSecondPlayerHeight] = useState(null);

useEffect(() => {
  if (selectedPlayer) {
    axios.get(`https://www.balldontlie.io/api/v1/players/${selectedPlayer}`)
      .then((res) => {
        console.log(res.data.height_feet); // Log the response data
        setPlayerHeight(res.data.height_feet);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}, [selectedPlayer]);

useEffect(() => {
  if (secondPlayer) {
    axios.get(`https://www.balldontlie.io/api/v1/players/${secondPlayer}`)
      .then((res) => {
        console.log(res.data.height_feet);
        setSecondPlayerHeight(res.data.height_feet);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}, [secondPlayer]);

// useEffect(() => {
//   if (selectedPlayer) {
//     axios.get(`https://www.balldontlie.io/api/v1/players/${selectedPlayer}`)
//       .then((res) => {
//         setPlayerHeight(res.data.height_feet);
//         console.log(playerHeight); // Log the updated state
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }, [selectedPlayer]);

// const data = {
//   labels: ['Height', 'Other Metrics...'],
//   datasets: [
//     {
//       data: [playerHeight, ...otherMetrics],
//       ...
//     },
//   ],
// };

const data = {
 labels: ['Height', 'Other Metrics...'],
  datasets: [
    {
      data: [playerHeight, secondPlayerHeight],
      backgroundColor: ['#5D76A9', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      borderWidth: 1,
    },
  ],
};
    return <PolarArea data={data} />;
}

export default PolarAreaChart