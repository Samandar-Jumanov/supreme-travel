"use client";

import { useSearchParams } from "next/navigation";
import { data } from "@/utils/plane-tickets-data";
import Image from "next/image";
import { useSession } from 'next-auth/react'

const FlightDetail = () => {
  const searchParams = useSearchParams();
  const idx = searchParams.get("id");
  const flight = data[idx - 1];
  const { data : session } = useSession();

  const bookFlight = async () => {
    const userId = await session.user.id
    if(!userId) alert("user id  is missing ")
    
      try {
        const response = await fetch('/api/book-flight/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: flight.from,
            to: flight.to,
            ticket: flight.ticket,
            price: flight.price, 
            date: flight.date,
            time: flight.time,
            place: flight.place,
            type: flight.type,
            meals: flight.meals,
            user: session.user.id,
          }),
        });

      } catch (error) {
        console.error('An error occurred during the fetch:', error);
      }
    } 
  
  

  return (
    <div className="flex  flex-left h-screen">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <Image
          src="https://www.shutterstock.com/image-photo/confident-pilot-male-uniform-keeping-260nw-524695456.jpg"
          layout="responsive"
          objectFit="cover"
          alt="Flight image"
          className="rounded-md object-fit "
          width={400}
          height={450}
        />
      </div>

      {/* Info Section */}
      <div className="w-full md:w-1/3 lg:w-1/2 p-8">
        <h4 className="text-2xl font-bold mb-4">{flight.from} to {flight.to}</h4>
        <p className="text-gray-600 mb-2">Price: {flight.price}</p>
        <p className="text-gray-600 mb-2">Date: {flight.date}</p>
        <p className="text-gray-600 mb-2">Ticket: {flight.ticket}</p>
        <p className="text-gray-600 mb-2">Type : {flight.type}</p>
        <p className="text-gray-600 mb-2"> Time : {flight.time}</p>
        <p className="text-gray-600 mb-2">Meal: {flight.meals}</p>
        <button className="black_btn" onClick={bookFlight}>Book this flight</button>
      </div>
    </div>
  );
};

export default FlightDetail;
