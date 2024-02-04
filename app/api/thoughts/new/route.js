//create new thought for your own flight 

import connectDb from "@/utils/connectMongo";
import models from "@/models/models";

export const POST = async ( request ) =>{
    const { userId , flightId , thoughtText , username , userImage , userEmail } = request.json();
  
    try {
        console.log(userId);
        console.log(flightId);

        // await connectDb();
         const user = await models.User.findById(userId || "65be27dff4e43008fa6846b8" ) ;
         if(!user)  return new Response("Cannot find user" , { status : 500});
         const flight = await models.Flights.findById(flightId || "65be27f3f4e43008fa6846bc" ) 
         if(!flight) return new Response("Cannot find flight " , { status : 404})
         
         const newThought = new models.Thoughts({
            userId : userId || "65be27dff4e43008fa6846b8",
            flightId : flightId || "65be27f3f4e43008fa6846bc",
            thoughtText : thoughtText || "Initial",
            username : username || "samandar",
            userImage : userImage || "https://lh3.googleusercontent.com/a/ACg8ocLIAyDpUQ-yigGjY1yR3S_YvNx1bm…",
            userEmail : userEmail ||  "samandarjumanov@gmail.com",
            createdAt : Date.now()
         });

         // save the thought
         const savedThought = await newThought.save();
         console.log("Created!!!!!!!!!!!")
         return new Response(JSON.stringify(savedThought, { status : 200}));
    } catch (error) {
        console.log(error.message)
         return new Response(error.message , 500)
    }
   
};



