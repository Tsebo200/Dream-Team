import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const LeagueLeadersData = () => {
    const [leaderOne, setleaderOne] = useState([]);
    const [kdPoints, setkdPoints] = useState([]);
    const [giannisPoints, setgiannisPoints] = useState([]);



    useEffect(()=> {

 

    // KD Points - 1
    axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=140')
    .then((res) => {
    let data = res.data.data[0]
    console.log(data)
    })
    .catch((err)=>{
    console.log(err)
    })

// Giannis Points - 2
    axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=15')
    .then((res) => {
    let data = res.data.data[0]
    console.log(data)
    })
    .catch((err)=>{
    console.log(err)
    })


// Jokic - The Joker - 3
    axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=246')
    .then((res) => {
    let data = res.data.data[0]
    console.log(data)
    })
    .catch((err)=>{
    console.log(err)
    })


// Trae Young - The Evil Goblin - 4
    axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=490')
    .then((res) => {
    let data = res.data.data[0]
    console.log(data)
    })
    .catch((err)=>{
    console.log(err)
    })
    
    
// Steph Curry - The Chef - 5
    axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=115')
    .then((res) => {
    let data = res.data.data[0]
    console.log(data)
    })
    .catch((err)=>{
    console.log(err)
    })

// Zack Lavine - 6
    axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=268')
    .then((res) => {
    let data = res.data.data[0]
    console.log(data)
    })
    .catch((err)=>{
    console.log(err)
    })



// Jayson Tatum - The Promise Child - 7
    axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=434')
    .then((res) => {
    let data = res.data.data[0]
    console.log(data)
    })
    .catch((err)=>{
    console.log(err)
    })


// DeMar DeRozan - 8
    axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=125')
    .then((res) => {
    let data = res.data.data[0]
    console.log(data)
    })
    .catch((err)=>{
    console.log(err)
    })




// Luka Doncic - 9
    axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=132')
    .then((res) => {
    let data = res.data.data[0]
    console.log(data)
    })
    .catch((err)=>{
    console.log(err)
    })


// Paul George - 10
    axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=172')
    .then((res) => {
    let data = res.data.data[0]
    console.log(data)
    })
    .catch((err)=>{
    console.log(err)
    })

},[0])

    return(
<>
</>
    )
}
export default LeagueLeadersData