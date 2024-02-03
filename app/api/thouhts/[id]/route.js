import connectDb from "@/utils/connectMongo";
import Thoughts from "@/models/thoughts";

export const GET = async (request, { params }) => {
    try {
      await connectDb();
      const thoughts = await Thoughts.find({ userId : params.id })
    .populate("userId")
    
      return new Response(JSON.stringify(thoughts, { status : 200}));
    } catch (error) {
      console.error(error.message);
      return new Response(error.message, { status : 500});
    }
  };
