import connectDb from "@/utils/connectMongo";
import Flights from "@/models/flights";

export const GET = async (request, { params }) => {
    try {
      // await connectDb();
      const flights = await Flights.find({ userId : params.id })
      .populate("userId")
    
      return new Response(JSON.stringify(flights , { status : 200}));
    } catch (error) {
      console.error(error.message);
      return new Response(error.message , { status : 500});
    }
  };
  