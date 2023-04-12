import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import NavBar from './components/Navbar';
import '../Sass/styles.sass';



function OldAPICards() {

  




// const leagueLeaders = [1,2,3]

// Mutiple calls in a usestate array
// number.data


    // const [allPlayers, setAllPlayers] = useState([])
    const leagueLeaders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
    const [allPlayersData, setAllPlayersData] = useState([])

// create a for loop that runs all ids


    // create 
    useEffect(()=> {

        let allPlayers = []
        
    
        // KD Points - 1
        axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=140')
        .then((res) => {
        let data = res.data.data[0]
    
        allPlayers.push(data)
        
         // console.log(data)
        })
        .catch((err)=>{
        console.log(err)
        })
    
    // Giannis Points - 2
        axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=15')
        .then((res) => {
        let data = res.data.data[0]
            allPlayers.push(data)
         // console.log(data)
        })
        .catch((err)=>{
        console.log(err)
        })
    
    
    // Jokic - The Joker - 3
        axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=246')
        .then((res) => {
        let data = res.data.data[0]
        allPlayers.push(data)
         // console.log(data)
        })
        .catch((err)=>{
        console.log(err)
        })
    
    
    // Trae Young - The Evil Goblin - 4
        axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=490')
        .then((res) => {
        let data = res.data.data[0]
        allPlayers.push(data)
         // console.log(data)
        })
        .catch((err)=>{
        console.log(err)
        })
        
        
    // Steph Curry - The Chef - 5
        axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=115')
        .then((res) => {
        let data = res.data.data[0]
         allPlayers.push(data)
         // console.log(data)
        })
        .catch((err)=>{
        console.log(err)
        })
    
    // Zack Lavine - 6
        axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=268')
        .then((res) => {
        let data = res.data.data[0]
         allPlayers.push(data)
         // console.log(data)
        })
        .catch((err)=>{
        console.log(err)
        })
    
    
    
    // Jayson Tatum - The Promise Child - 7
        axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=434')
        .then((res) => {
        let data = res.data.data[0]
         allPlayers.push(data)
         // console.log(data)
        })
        .catch((err)=>{
        console.log(err)
        })
    
    
    // DeMar DeRozan - 8
        axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=125')
        .then((res) => {
        let data = res.data.data[0]
        allPlayers.push(data)
         // console.log(data)
        })
        .catch((err)=>{
        console.log(err)
        })
    
    
    
    
    // Luka Doncic - 9
        axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=132')
        .then((res) => {
        let data = res.data.data[0]
        allPlayers.push(data)
         // console.log(data)
        })
        .catch((err)=>{
        console.log(err)
        })
    
    
    // Paul George - 10
        axios.get('https://www.balldontlie.io/api/v1/stats?season[]=2018&player_ids[]=132')
        .then((res) => {
        let data = res.data.data[0]
         allPlayers.push(data)
        //  // console.log(data)
        })
        .catch((err)=>{
        console.log(err)
        })
    
        setAllPlayersData(allPlayers)
        console.log(allPlayers)
    },[])
    

    return (
        <>
            {allPlayersData.map((number) => {
                    return (
                    <>
                    <div className="cardContainer">
                        <div className="cardNumber"></div>
                        <div className="playerIcon"></div>
                        <p>KD</p>
                        <p>29.4</p>
                    </div>
                    </>
                    ); })}
        </>

    )
    export default OldAPICards