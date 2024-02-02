import mongoose from "mongoose";
async function connectDb(){

        try {
              mongoose.set("strictQuery" , true );
              mongoose.connect(process.env.MONGO_URI , {
                useNewUrlParser : true ,
                useUnifiedTopology : true 
              })

              console.log("Mongodb connected ")

        } catch (error) {
              console.log(error.message)
        }
}

export default connectDb;

