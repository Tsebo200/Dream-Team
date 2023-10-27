import React from "react";
import {useState, useEffect } from "react";
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

function LineChart({ selectedYear }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const [lebronPoints, setLebronPoints] = useState();
  const [kobePoints, setKobePoints] = useState();
  const [jordanPoints, setJordanPoints] = useState();


  const baseUrl = `https://www.balldontlie.io/api/v1/stats?seasons[]=${selectedYear}&player_ids[]=`;
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
        // console.log(data);
        let stats = [];

        for (let i = 0; i < data.length; i++) {
          stats.push(data[i].pts);
          //   // Add axios

          // console.log(stats)
          setLebronPoints(stats)
          console.log(lebronPoints);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}, [selectedYear]);



useEffect(() => {
  for (let i = 0; i < kobeId.length; i++) {
    axios.get(baseUrl + kobeId[i])
      .then((res) => {
        let data = res.data.data;
        // console.log(data);
        let stats = [];

        for (let i = 0; i < data.length; i++) {
          stats.push(data[i].pts);
          //   // Add axios

          // console.log(stats)
          setKobePoints(stats)
          console.log(kobePoints);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}, [selectedYear]);



useEffect(() => {
  for (let i = 0; i < jordanId.length; i++) {
    axios.get(baseUrl + jordanId[i])
      .then((res) => {
        let data = res.data.data;
        // console.log(data);
        let stats = [];

        for (let i = 0; i < data.length; i++) {
          stats.push(data[i].pts);
          //   // Add axios

          // console.log(stats)
          setJordanPoints(stats)
          console.log(jordanPoints);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}, [selectedYear]);





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
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Lebron James",
        data: lebronPoints,
        borderColor: "#9A04EB",
        backgroundColor: "#9A04EB",
      },
      {
        label: "Michael Jordan",
        data: jordanPoints,
        borderColor: "#ED144B",
        backgroundColor: "#ED144B",
      },
      {
        label: "Kobe Bryant",
        data: kobePoints,
        borderColor: "#FF6910",
        backgroundColor: "#FF6910",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default LineChart;
