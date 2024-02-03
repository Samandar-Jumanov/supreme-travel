import mongoose , { Schema } from 'mongoose'


const UserSchema = new Schema({
    email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 
    "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});


const FlightSchema = new Schema({
    userId: { type : Schema.Types.ObjectId, required: true , ref : "User"},
    from: { type: String, required: true },
    to: { type: String, required: true },
    ticket: { type: String, required: true },
    price: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    place: { type: String, required: true },
    type: { type: String, required: true },
    meals: { type: String, required: true },  
  });




const thoughtsSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
   },
   flightId : {
       type : mongoose.Schema.Types.ObjectId,
       ref: 'Flights'
   },
   thoughtText: {
       type: String,
       required: true
   },
   username: {
       type: String,
       required: true
   },
   userImage : {
       type: String ,
       required: true
   },
   userEmail : {
       type: String,
       required: true
   },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

  

export  default { UserSchema , FlightSchema , thoughtsSchema}