import connectDb from "@/utils/connectMongo";
import Flights from "@/models/flights";

export const POST = async (request) =>{
    
     try {
        await connectDb();
        const { from, to, ticket, price, date, time, place, type, meals } = request.json();
        const newFlight =  new Flights({
            from,
            to,
            ticket,
            price,
            date,
            time,
            place,
            type,
            meals
        });
    
        await newFlight.save();
        return  new Response("Succes", 201);
        
     } catch (error) {
            console.log(error.message);
            return new Response(error.message, 500);
     }
};

