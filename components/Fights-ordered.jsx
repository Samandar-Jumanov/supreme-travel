"use client"

import React , { useState , useEffect} from 'react'
import {  useRouter } from 'next/navigation'
import axios from 'axios';
import { useSession } from 'next-auth/react';

const FightsOrdered = () => {
    const [flights , setFlights ] = useState([]);
    const [isAddingThought , setIsAddingThought] = useState(false)
    const { data : session } = useSession();

    useEffect(() =>{
         const fetchFLights = async () =>{
             const response = await axios.get(`/api/book-flight/${session.user.id}`);
             console.log(response.data);
             setFlights(response.data);
         }
         if(session?.user.id) fetchFLights();
         console.log(session.user.id);  
    } , []);



    const addThought = ( id ) =>{
      setIsAddingThought(true);
      console.log( "UserId:  " , session?.user.id);
      console.log("Flight id: " , id)
    };


  return (
    <div>
        Your booked flights 
        {flights.map((flight) => (
             <div>  
              <h1>{flight.from} to {flight.to} </h1>
              {isAddingThought ? (
                  <div>  
                        <input type="text" />
                        <button> Share thought</button>
                  </div>
              ) : (
                  <div> 
                  <button onClick={() => addThought(flight._id)} className='black_btn'> Add thought about it (How it went )</button>
                  </div> 
              ) };
             </div>
        ))}
    </div>

  );
}

export default FightsOrdered