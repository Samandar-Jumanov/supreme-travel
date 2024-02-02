"use client"

import React , { useEffect, useState } from 'react'
const Flight = ({ flight } ) => {
    const [selectedFlight, setSelectedFlight] = useState(null);
     
  return (
    <div>
    <h1>  {flight.from} </h1>
    <h1>  {flight.to} </h1>
     <h1>   {flight.price} </h1>
       <h1>{flight.date}</h1>

<br />
        <hr />
       <br />

    </div>
  )
}

export default Flight