import connectDb from "@/utils/connectMongo";
import Flights from "@/models/flights";

export const POST = async (request) => {
  const {   userId , from, to, ticket, price, date, time, place, type, meals } = request.json()
  try {
    await connectDb();
    const newFlight =  new Flights({
        userId : userId ,
        from: from,
        to: to,
        ticket: ticket,
        price: price,
        date: date,
        time: time,
        place: place,
        type: type,
        meals: meals,
    })
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
  
    return new Response(JSON.stringify(flights , { status : 200}));
  } catch (error) {
    console.error(error.message);
    return new Response("Failed to fetch" , { status : 500});
  }
};
