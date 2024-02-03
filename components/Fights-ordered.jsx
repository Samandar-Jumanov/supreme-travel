import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';  // Use 'next/router' instead of 'next/navigation'
import axios from 'axios';
import { useSession } from 'next-auth/react';

const FightsOrdered = () => {
  const router = useRouter();
  const [thought, setThought] = useState("Initial thought ");
  const [flights, setFlights] = useState([]);
  const [isAddingThought, setIsAddingThought] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        if (session?.user.id) {
          const response = await axios.get(`/api/book-flight/${session.user.id}`);
          console.log(response.data);
          setFlights(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchFlights();
    console.log(session?.user.id);
  }, [session]);

  const addThought = async (id) => {
    setIsAddingThought(true);
    console.log("UserId: ", session?.user.id);
    console.log("Flight id: ", id);

    try {
      const requestBody = {
        userId: session?.user.id,
        flightId: id,
        thoughtText: thought,  
        username: session?.user.name,
        userImage: session?.user.image,
        userEmail: session?.user.email
      };

      console.log("Sending request to backend ")
      const response = await fetch(`/api/thoughts/new`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log("Response is here ")
      if (response.ok) {
        router.push(`alert?response=${response.statusText}`);
      }
      console.log(response);

    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      Your booked flights
      {flights.map((flight) => (
        <div key={flight._id}>
          <h1>{flight.from} to {flight.to}</h1>
          {isAddingThought ? (
            <div>
              <input type="text" onChange={(e) => setThought(e.target.value)} />
              <button className='black_btn'>Share thought</button>
            </div>
          ) : (
            <div>
              <button onClick={() => addThought(flight._id)} className='black_btn'>Add thought about it (How it went)</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FightsOrdered;
