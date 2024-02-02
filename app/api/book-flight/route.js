import connectDb from "@/utils/connectMongo";
import Flights from "@/models/flights";

export const POST = async (request) => {
  try {
    await connectDb();
    // const { from, to, ticket, price, date, time, place, type, meals , userId } = 

    const newFlight =  new Flights(request.json())

    await newFlight.save()
    
    return new Response("Succes" , { status : 201});
  } catch (error) {
    console.error(error.message);
    return new Response(error.stack  , 500)
  }
};

export const GET = async (request, { params }) => {
  try {
    await connectDb();
    const flights = await Flights.findById({ user: params.id })
    .populate("user")
    .setOptions({ maxTimeMS : 3000})
    return new Response(JSON.stringify(flights), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
