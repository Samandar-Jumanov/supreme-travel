import React from 'react'

const Thought = ( { thoughts }) => {
  return (
    <div>
            {thoughts.map(thought => (
                <div key={thought._id}>
                    <h2>{thought.thoughtText}</h2>
                    <p>{thought.username}</p>
                </div>
            ))}
    </div>
  )
}

export default Thought