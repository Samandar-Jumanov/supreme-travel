"use client"
import Flight from '@/components/Flight'
import React, { useEffect, useState } from 'react'
import { data } from '@/utils/plane-tickets-data'

const BookFlight = () => {
  const [flights, setflights] = useState([]);

  useEffect(() =>{
        setflights(data);
  } , []);


  return (
    <div>
       {data && 
        data.map((flight) =>{
            return <Flight key={flight.id} flight={flight} />
        })
       }
    </div>
  )
}

export default BookFlight