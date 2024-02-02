import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Flight = ({ flight }) => {
  const router = useRouter();

  const selectFlight = (id) =>{
   router.push(`flight?id=${id}`)    
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md my-4">

      <h1 className="text-2xl font-bold mb-4">{flight.from} to {flight.to}</h1>
      <p className="text-gray-600 mb-2">Price: {flight.price}</p>
      <p className="text-gray-600 mb-2">Date: {flight.date}</p>

    
      <div className="relative w-48 h-48 mx-auto mb-4">
        <Image
          src="https://www.shutterstock.com/image-photo/confident-pilot-male-uniform-keeping-260nw-524695456.jpg"
          layout="fill"
          objectFit="cover"
          alt="Flight image"
          className="rounded-md"
        />
      </div>

      <button className='black_btn' onClick={() => selectFlight(flight.id)}> See more info </button>
      <hr className="my-4 border-t-2 border-gray-300" />

    </div> 
    
  );
};

export default Flight;
