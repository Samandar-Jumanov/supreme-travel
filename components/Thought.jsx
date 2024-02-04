"use client"

import React , { useState } from 'react';
import { useRouter } from 'next/navigation'
const Thought = ({ thoughts }) => {
  const router = useRouter();


  const provideMorInfo = (thoughtId  ) =>{
       router.push(`thoughtInfo?thoughtId=${thoughtId}`);
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-4">
      {thoughts.map((each) => (
        <div key={each.id} className="mb-4 md:w-1/3 md:flex-shrink-0">
          <p>{each.username}</p>
          <p>{each.userEmail}</p>
          <p>{each.thoughtText}</p>
          <button className='black_btn' 
          onClick={() => provideMorInfo(each._id)}> See more </button>
        </div>
      ))}
    </div>
  );
};

export default Thought;
