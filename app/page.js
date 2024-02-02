"use client"

import { useState , useEffect } from "react"
import { useSession   , getProviders , signIn , signOut} from 'next-auth/react'
import { useRouter } from 'next/navigation';

const Home  = () => {
   const [providers , setProviders ] = useState(null);
   const { data : session } = useSession();

   useEffect(() =>{
      getProviders().then(providers => setProviders(providers))
   } , [])


  return (
    <div> 
         {providers && 
            Object.values(providers).map((provider ) =>{
                return (
                     <button key={provider.name} onClick={() => signIn(provider.id)}>
                       Continue with {provider.name}
                     </button>
                )
            })
         }
     </div>
  )
}

export default Home;
