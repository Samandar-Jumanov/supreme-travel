"use client"

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [thoughtInfo , setThoughtInfo] = useState({});
  const searchParams = useSearchParams();
  const thoughtId = searchParams.get("thoughtId");
  

  useEffect(() => {
      const fetchThought = async () =>{
          const response = await fetch(`/api/thoughtInfo/${thoughtId}`);
           setThoughtInfo(response.json())
      }
        if(thoughtId)  fetchThought()
        console.log(thoughtInfo)
  } , [])
  
  return (
    <div>
      <h1> 
      {thoughtInfo.thoughtText}
      </h1>
    </div>
  );
};

export default Page;
