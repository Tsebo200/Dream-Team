import {Bar} from 'react-chartjs-2';
import React from 'react';
import axios from 'axios';
import LeagueLeaders from '../../API/LeagueLeaders';
import { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, ArcElement, Tooltip, Legend, CategoryScale, BarElement } from 'chart.js';
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);



function BarChart() {
  // var playerId = 15
  let playerId = [140, 15, 246, 490, 115, 268, 434, 125, 132, 172];
  const url = "https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=";

  const KD = "https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=140";
  const Giannis = "https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=15";
  const Jokic = 'https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=246';
  const Young = 'https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=490';
  const Curry = 'https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=115';
  const Lavine = 'https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=268';
  const Tatum = 'https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=434';
  const DeRozan = 'https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=125';
  const Luka = 'https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=132';
  const George = 'https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=172';
  
  var leaguePlayer = [KD, Giannis, Jokic, Young, Curry, Lavine, Tatum, DeRozan, Luka, George];

    const [kevinData, setKevinData] = useState();
    const [giannisData, setGiannisData] = useState('');
    const [jokicData, setJokicData] = useState('');
    const [youngData, setYoungData] = useState('');
    const [curryData, setCurryData] = useState('');
    const [lavineData, setLavineData] = useState('');
    const [tatumData, setTatumData] = useState('');
    const [deRozanData, setDeRozanData] = useState('');
    const [lukaData, setLukaData] = useState('');
    const [georgeData, setGeorgeData] = useState('');

    // leaguePlayer.map((leaguePlayer) => data.data[0].pts)

      useEffect(()=>{
        for (let i = 0; i < playerId.length; i++){
        axios.get(url+playerId[i])
        .then((res)=>{
          // let data = res.data.data
          // let kevinBestPoints = res.data.data[23].pts
          
          let data = res.data.data;
          console.log(data)
          let stats = [];

          for (let i = 0; i < data.length; i++) {
            stats.push(data[i].pts)
          //   // Add anaxios 
          }
        

          // for (let i = 0; i < 10; i++){
          //   if(i = 0){
          //     var id = 140
          //   } else if(i = 1){
          //     var id = 15
          //   } else if(i = 2){
          //     var id = 246
          //   }
          //   axios.get("https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]="+id)
          //  let data2 =  res.data.data

          // }
          console.log(stats);
          setKevinData(stats)

          // console.log(data);




          
          // let kevinDurant  = leaguePlayer[0].res.data[23].pts

          // console.log(data)
          // console.log(kevinData)
          // console.log(kevinBestPoints)

          // setKevinData(kevinBestPoints)
          // console.log()

        })
        .catch((err)=>{
          console.log(err)
        })
      }
      },[])
    

     const GiannisBestPoints = useRef()


      // Giannis
      useEffect(()=>{
        axios.get(leaguePlayer[1])
        .then((res)=>{
          let data = res.data.data
          let GiannisBestPoints = res.data.data[23].pts

          // console.log(data)
          // console.log(GiannisBestPoints)

          setGiannisData(GiannisBestPoints)
          // console.log()

        })
        .catch((err)=>{
          console.log(err)
        })
      })



        // // Steph
        // useEffect(()=>{
        //   axios.get(leaguePlayer[2])
        //   .then((res)=>{
        //     let data = res.data.data
        //     let CurryBestPoints = res.data.data[23].pts
  
        //     console.log(data)
        //     console.log(CurryBestPoints)
  
        //     setCurryData(CurryBestPoints)
        //     // console.log()
  
        //   })
        //   .catch((err)=>{
        //     console.log(err)
        //   })
        // })
  


  
  
  
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
        text: 'Compare playas',
      },
    },
  };
  



  const labels = ['Durant', 'Giannis', 'Jokic', 'Young', 'Curry', 'Lavine', 'Tatum', 'DeRozan', 'Luka', 'George'];
    // const labels = ['playerOne', 'playerTwo', 'Steph Curry', 'March', 'April', 'May', 'June', 'July'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Playas Points',
        data: kevinData,
        // data: [{x: 10, y: {GiannisBestPoints}}, {x: 15, y: null}, {x: 20, y: 10}],
        backgroundColor: '#5D76A9',
      },
    ],
  };
 

  return <Bar options={options} data={data}/>
}

export default BarChart