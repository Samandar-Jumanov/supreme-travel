import { model  , models  , Schema } from 'mongoose';

const FlightSchema = new Schema({
      user : {
        type : Schema.Types.ObjectId,
         ref :'User'
      },
              
      from :{
         type : String , 
         required : true
      },
      to : {
          type : String,
          required : true
      },
      ticket : {
          type : String,
          required : true
      },
      price : {
         type : String,
         required : true
      },
      date :  {
         type : String ,
         required : true
      },
      place : {
        type : String,
        required : true
      },
      time : {
        type : String,
        required : true
      },
      type : {
        type : String,
        required : true
      },
      meals : {
        type : String,
        required : true
      }
})


const Flights =  models.Flights || model("Flights" , FlightSchema)
export default Flights;
