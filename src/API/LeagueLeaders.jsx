import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';


function LeagueLeaders() {
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

  return (

    <div>LeagueLeaders</div>
  )
}

export default LeagueLeaders