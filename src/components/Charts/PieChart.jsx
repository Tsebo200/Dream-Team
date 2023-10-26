import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({selectedPlayer, secondPlayer}) {
  const [orebData, setOrebData] = useState([]);
  const [secondPlayerOrebData, setSecondPlayerOrebData] = useState([]);

  useEffect(() => {
    if (selectedPlayer) {
      axios.get(`https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=${selectedPlayer}`)
        .then((res) => {
          let totalRebounds = res.data.data.reduce((total, game) => total + game.oreb, 0);
          setOrebData([totalRebounds]); // Update the state with the total rebounds
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedPlayer]);

  useEffect(() => {
    if (secondPlayer) {
      axios.get(`https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=${secondPlayer}`)
        .then((res) => {
          let totalRebounds = res.data.data.reduce((total, game) => total + game.oreb, 0);
          setSecondPlayerOrebData([totalRebounds]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [secondPlayer]);



   

const data = {
  labels: ['Game 1', 'Game 2', 'Game 3'],
  datasets: [
    {
      label: 'Offensive Rebounds',
      data:  [...orebData, ...secondPlayerOrebData], // Use the state variable here
      backgroundColor: ['#5D76A9', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      borderWidth: 1,
    },
  ],
};

  return <Pie data={data}/>
}

export default PieChart


