import React from "react";
import axios from "axios";
import { useEffect, useState} from "react";


const Dropdown = () => {
const [storeName, setStoreName] = useState()


  useEffect(() => {
    axios.get("https://www.balldontlie.io/api/v1/players")
      .then((res) => {
        let data = res.data.data[1];
        console.log(data);
        let name = data.first_name;
        let surname = data.last_name;

        let playerName = name + " " + surname;
        console.log(playerName);
        setStoreName(playerName);

      
   
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
    <select>
      <option>--Select--</option>
      <option>{storeName}</option>
    </select>
    
    </>
  );
}

export default Dropdown
