import mongoose from 'mongoose';


const thoughtsSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
   },
   flightId : {
       type : mongoose.Schema.Types.ObjectId,
       ref: 'Flight'
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

const Thoughts = mongoose.models.Thoughts ||  mongoose.model('Thoughts', thoughtsSchema);
export default Thoughts;

