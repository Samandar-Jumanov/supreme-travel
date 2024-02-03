"use client"

import React , { useState , useEffect} from 'react'
import {  useRouter } from 'next/navigation'
import axios from 'axios';
import { useSession } from 'next-auth/react';

const FightsOrdered = () => {
    const [flights , setFlights ] = useState([]);
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

  return (
    <div>

    </div>
  )
}

export default FightsOrdered