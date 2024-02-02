"use client"

import React from 'react'
import { useRouter , useSearchParams} from 'next/navigation'

const Alert = ( ) => {
   const searchParams = useSearchParams();
   const msg = searchParams.get("response")
  return (
    <div>
        <h1> {msg} </h1>
    </div>
  )
}

export default Alert