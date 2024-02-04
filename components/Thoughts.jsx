"use client"
import React , { useState , useEffect } from 'react'
import Thought from './Thought'

const Thoughts = () => {
    const [thoughts, setThoughts] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)
      
    useEffect(() => {
      const fetchAllThoughts = async () => {
          try {
              console.log("Request sent");
              const response = await fetch("/api/thoughts");
              const data = await response.json();
              setThoughts(data); 
          } catch (error) {
              console.error("Error fetching thoughts:", error);
             
          }
      };
  
      fetchAllThoughts();
  }, []);
  


 
  return (
    <div>
       <Thought 
         thoughts={thoughts}
         />
    </div>
  )
}

export default Thoughts