import connectDb from "@/utils/connectMongo";
import models from "@/models/models";

export const POST = async (request) => {
  await connectDb();
  try {
    const { userId, from, to, ticket, price, date, time, place, type, meals } = await request.json();

    if (!userId || !from || !to || !ticket || !price || !date || !time || !place || !type || !meals) {
      return new Response("Missing or invalid parameters", { status: 400 });
    }

   
    const newFlight = new models.Flights({
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

