import React, { useEffect, useState } from "react";
import axios from "axios";

const Dropdown = ({ setSelectedPlayer }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get("https://www.balldontlie.io/api/v1/players")
      .then((res) => {
        setPlayers(res.data.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleChange = (event) => {
    setSelectedPlayer(event.target.value);
  }

  return (
    <select onChange={handleChange}>
      <option>--Select--</option>
      {players.map(player => (
        <option key={player.id} value={player.id}>
          {player.first_name} {player.last_name}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;