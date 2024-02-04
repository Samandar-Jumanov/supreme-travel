"use client"

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const thoughtId = searchParams.get("thoughtId");
  

  useEffect(() => {
      const fetchThought = async () =>{
          const response = await fetch(`/api/thoughtInfo/${thoughtId}`);
          console.log(response.status)
      }
        if(thoughtId)  fetchThought()
  } , [])

  return (
    <div>

    </div>
  );
};

export default Page;
