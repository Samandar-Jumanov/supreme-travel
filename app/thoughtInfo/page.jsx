"use client"

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const thoughtId = searchParams.get("thoughtId");
  


  return (
    <div>

    </div>
  );
};

export default Page;
