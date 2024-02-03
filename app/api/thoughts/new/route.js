//create new thought for your own flight 

import connectDb from "@/utils/connectMongo";
import Thoughts from "@/models/thoughts";
import Flights from "@/models/flights";
import User from "@/models/user";

export const POST = async ( request , { params }) =>{
    const { userId , flightId , thoughtText , username , userImage , userEmail } = request.json();
  
    try {
        // await connectDb();
         const user = await User.findById(userId);
         if(!user)  return new Response("Cannot find user" , { status : 500})
         const flight = await Flights.findById(flightId);
         if(!flight) return new Response("Cannot find flight " , { status : 404})
         
         const newThought = new Thoughts({
            userId : userId,
            flightId : flightId,
            thoughtText : thoughtText,
            username : username,
            userImage : userImage,
            userEmail : userEmail,
            createdAt : Date.now()
         });

         // save the thought
         const savedThought = await newThought.save();
         return new Response(JSON.stringify(savedThought, { status : 200}));
    } catch (error) {
        console.log(error.message)
         return new Response(error.message , 500)
    }
   
}



