import models from "@/models/models";
import connectDb from "@/utils/connectMongo";

export const GET = async ( request ) =>{
    try {
          await connectDb();
          const allThoughts = await models.Thoughts.find({});
          return new Response(JSON.stringify(allThoughts ) , { status : 200})
    } catch (error) {
          console.log(error.message);
          return new Response(JSON.stringify(error, { status : 500}))
    }
};


