"use client"
import React , { useState , useEffect } from 'react'

const Thoughts = () => {
    const [thoughts, setThoughts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('/api/thoughts')
     .then(res => res.json())
     .then(
            (result) => {
                setThoughts(result)
                setLoading(false)
            },
     
            (error) => {
                setError(error)
                setLoading(false)
            }
        )
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }
  return (
    <div>
        {thoughts.map((each) =>{
              return <div key={each.id}>{each.thoughtText}</div>
        })}
    </div>
  )
}

export default Thoughts