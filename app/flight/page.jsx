"use client";

import { useSearchParams } from "next/navigation";
import { data } from "@/utils/plane-tickets-data";
import Image from "next/image";

const FlightDetail = () => {
  const searchParams = useSearchParams();
  const idx = searchParams.get("id");
  const flight = data[idx - 1];

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
        <button className="black_btn">Book this flight</button>
      </div>
    </div>
  );
};

export default FlightDetail;
