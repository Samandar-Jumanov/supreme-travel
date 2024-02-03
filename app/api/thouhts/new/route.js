import connectDb from "@/utils/connectMongo";
import Thoughts from "@/models/thoughts";
import Flights from "@/models/flights";
import User from "@/models/user";

export const POST = async ( request , { params }) =>{
    const { userId , flightId , thoughtText , username , userImage , userEmail } = request.json();
  
    try {
        // await connectDb();
         const user = await User.findById(userId);
         if(!user) returnResponse("Cannot find user" , 500);
         const flight = await Flights.findById(flightId);
         if(!flight) returnResponse("Cannot find flight", 500);
         
         // if both user and flight id is valid then create one thought 
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
        returnResponse("Internal server error" , 500)
    }
   
}




function returnResponse ( message , status ){
    return new Response(JSON.stringify(message, { status : status}));
}