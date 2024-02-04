"use client"
import React , { useState , useEffect } from 'react'
import Thought from './Thought'

const Thoughts = () => {
    const [thoughts, setThoughts] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)
      
    useEffect(() =>{
          const fetchAllThoughts = async () =>{
            console.log("Request sent ")
                const response = await fetch("/api/thoughts")
            //    setThoughts(response.json())
               console.log(response.json())
          }
          fetchAllThoughts()
    } , []);


 
  return (
    <div>
       {/* <Thought 
         thoughts={thoughts}
         /> */}
    </div>
  )
}

export default Thoughts