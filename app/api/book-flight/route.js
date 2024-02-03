import connectDb from "@/utils/connectMongo";
import Flights from "@/models/flights";

export const POST = async (request) => {
  await connectDb();
  try {
    const { userId, from, to, ticket, price, date, time, place, type, meals } = await request.json();

    if (!userId || !from || !to || !ticket || !price || !date || !time || !place || !type || !meals) {
      // Handle missing or invalid parameters
      return new Response("Missing or invalid parameters", { status: 400 });
    }

    console.log(`Request: ${userId} ${from} ${to}`);

    // Uncomment the following lines when you are ready to save to the database
    // await connectDb();
    const newFlight = new Flights({
      userId: userId,
      from: from,
      to: to,
      ticket: ticket,
      price: price,
      date: date,
      time: time,
      place: place,
      type: type,
      meals: meals,
    });
    
    await newFlight.save();

    return new Response("Success", { status: 201 });
  } catch (error) {
    console.error(error.message);
    return new Response(error.stack, { status: 500 });
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
