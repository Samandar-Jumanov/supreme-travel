import mongoose , { models , model } from "mongoose";
import schemas from "@/schemas/schemas";

const User = models.User || model("User" , schemas.UserSchema)
const Flights = models.Flights || model("Flights" , schemas.FlightSchema)
const Thoughts = models.Thoughts || model('Thoughts', schemas.thoughtsSchema);

export default { User , Flights , Thoughts}