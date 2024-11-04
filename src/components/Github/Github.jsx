import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const response = axios.get("https://api.github.com/users/HaR-S-H")
    response.then(res => {
      console.log(res.data.followers)
      setData(res.data)
    }).catch(err => {
      console.error('Error fetching data:', err)
    })
  },[]) 
  return (
    <div className=' m-4 bg-gray-600 text-white p-4 text-3xl text-center flex flex-col items-center'>
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="Git picture"  width={100}/>
    </div> 
  )
}
