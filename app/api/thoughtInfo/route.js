import connectDb from "@/utils/connectMongo";
import models from "@/models/models";

export const GET = async (request , { params}) =>{
  
    try {
          await connectDb();
          console.log("Started to fetch data ")
          const thought = await models.Thoughts.findOne({ _id : params.id })
          console.log( " Fetched: " , thought)
          return new Response(JSON.stringify(thought), { status : 200})
    } catch (error) {
           return new Response("Failed fetch the thought" , { status : 500})
    }
};
