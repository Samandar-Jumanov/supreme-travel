"use client"

import { useState , useEffect } from "react"
import { useSession   , getProviders , signIn , signOut} from 'next-auth/react'
import { useRouter } from 'next/navigation';

const Home  = () => {
 

  return (
    <div> 
        
         Welcome here !
     </div>
  )
}

export default Home;
