"use client"

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

const ThoughtInfo = () => {
  const router = useRouter();
  const [thoughtInfo, setThoughtInfo] = useState(null);
  const searchParams = useSearchParams();
  const thoughtId = searchParams.get("thoughtId");

  useEffect(() => {
    const fetchThought = async () => {
      try {
        const response = await fetch(`/api/thoughtInfo/${thoughtId}`);
        const data = await response.json();
        setThoughtInfo(data);
      } catch (error) {
        console.error("Error fetching thought:", error);
      }
    };

    if (thoughtId) {
      fetchThought();
    }
  }, [thoughtId]);

  return (
    <div className="container mx-auto mt-8 p-4 max-w-md">
      {thoughtInfo ? (
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="mr-4">
              <Image
                src="https://lh3.googleusercontent.com/a/ACg8ocLIAyDpUQ-yigGjY1yR3S_YvNx1bmHtj5sIS75nUAPX=s96-c" // adding valid image for now 
                alt='user_image'
                width={50}
                height={60}
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold">{thoughtInfo.username}</h1>
              <h1 className="text-sm text-gray-500">{thoughtInfo.userEmail}</h1>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">{thoughtInfo.thoughtText}</h1>
          <p className="mb-4">Did you find it helpful?</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Yes</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">No</button>
          </div>
        </div>
      ) : (
        <div className="text-center">Loading.....</div>
      )}
    </div>
  );
};

export default ThoughtInfo;
