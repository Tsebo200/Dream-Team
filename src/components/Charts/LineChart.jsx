import React from "react";
import {useState, useEffect } from "react";
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

function LineChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const [goatsPoints, setGoatsPoints] = useState();


const baseUrl = "https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=";
let lebronId = [237];
let kobeId = [246];
let jordanId = [2931];

const Jordan = 2931;
const kobe = 246;
const lebron = 237;


useEffect(() => {
  for (let i = 0; i < lebronId.length; i++) {
    axios.get(baseUrl + lebronId[i])
      .then((res) => {
        let data = res.data.data;
        console.log(data);
        let stats = [];

        for (let i = 0; i < data.length; i++) {
          stats.push(data[i].pts);
          //   // Add axios

          console.log(stats)
          setGoatsPoints(stats)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}, []);




  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Goats O'clock",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Lebron James",
        data: goatsPoints,
        borderColor: "#9A04EB",
        backgroundColor: "#9A04EB",
      },
      {
        label: "Dataset 2",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "#ED144B",
        backgroundColor: "#ED144B",
      },
      {
        label: "Dataset 2",
        data: [12, 19, 3, 5, 2, 3, 7],
        borderColor: "#FF6910",
        backgroundColor: "#FF6910",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default LineChart;
