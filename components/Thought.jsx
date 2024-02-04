"use client"

import React from 'react'

const Thought = ( { thoughts }) =>{
   return (
       <div>

        {thoughts.map((each) =>(
            <div>
              {each.username}
            </div>
        ))}
       </div>
   )
}