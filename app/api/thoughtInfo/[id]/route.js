import connectDb from "@/utils/connectMongo";
import models from "@/models/models";

export const GET = async (request , { params}) =>{
  
    try {
          await connectDb();
          const thought = await models.Thoughts.findById({ _id : params.id }).maxTimeMS(200000)
          return new Response(JSON.stringify(thought), { status : 200})
    } catch (error) {
           return new Response("Failed fetch the thought" , { status : 500})
    }
};
