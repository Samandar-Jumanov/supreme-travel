"use client";

import { useSearchParams , useRouter  } from "next/navigation";
import { data } from "@/utils/plane-tickets-data";
import Image from "next/image";
import { useSession  } from 'next-auth/react'

const FlightDetail = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const idx = searchParams.get("id");
  const flight = data[idx - 1];
  const { data : session } = useSession();

  const bookFlight = async () => {
    const userId = session?.user?.id;
  
    if (!userId) {
      alert("User ID is missing.");
      return;
    }
  
    const requestBody = {
      userId: userId,
      from: flight?.from,
      to: flight?.to,
      ticket: flight?.ticket,
      price: flight?.price,
      date: flight?.date,
      time: flight?.time,
      place: flight?.place,
      type: flight?.type,
      meals: flight?.meals,
    };
  
    
    if (Object.values(requestBody).some((value) => value === undefined || value === null)) {
      alert("One or more required fields are missing.");
      return;
    }
  
    try {
      const response = await fetch('/api/book-flight/new', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        router.push(`alert?response=${response.statusText}`);
      }
      console.log(response);
    } catch (error) {
      console.error('An error occurred during the fetch:', error);
    }

    console.log(requestBody)
  };
  
  

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
      <button>See in google maps</button>
    </div>
  );
};

export default FlightDetail;
