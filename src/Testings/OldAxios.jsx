import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function OldAxios() {
        const [ballerName, setBallerName] = useState([])
        const [ballerData, setBallerData] = useState('')
      
      
      
        // useEffect(() => {
      
        //   axios.get('https://www.balldontlie.io/api/v1/players')
        //   .then((res) => {
        //    setBallerName(res.data.data[4].first_name)
        //   //  console.log({ballerName})
        //    console.log(ballerName)
        //   })
        //    .catch((err) =>{
        //      console.log(err)
        //   })
         
        //  }, [])
       
      
         useEffect(() => {
      
         axios.get('https://www.balldontlie.io/api/v1/stats')
         .then((res) => {
            let data = res.data.data 
      
      
          // setBallerData(res.data.data[10].ast)
          // setBallerData(res.data.data[24].ast)
      
      
          const fieldGoalsAttempted = []
      
          for (let i = 0; i < data.length; i++) {
            fieldGoalsAttempted.push({ data: data[i].fga })
          }
          console.log(fieldGoalsAttempted)
      
          
      
          // setBallerData(res.data.data[0].fga)
          
          
          // let playerStats = 
          // setBallerData(res.data)
          // playerStats(res.data)
         //  console.log({ballerName})
          // ballerData.map((data) => res.data.data),
      
          console.log(ballerData)
         })
          .catch((err) =>{
            console.log(err)
         })
        
        },[ballerData])
      
      
  return (
    <div>OldAxios</div>
  )
}

export default OldAxios