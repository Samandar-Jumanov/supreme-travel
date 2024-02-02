import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user"
import connectDb from "@/utils/connectDb";


const handleAuth = NextAuth({
    providers :[
         GoogleProvider({
             clientId :process.env.GOOGLE_ID,
             clientSecret :process.env.GOOGLE_CLIENT_SECRET
         })
    ],

    callbacks : {
         async session({ profile }) { // can be used for storing id 
                 try {

                    await connectDb();
                    const user = await User.findOne({ email : profile?.user.email })
                    profile.user.id = user._id.toString();
                    return session 

                 } catch (error) {
                       console.log(error.message)
                 }
         },

         async signIn ({profile}){ // check user has account or not , if not create 
                try {
                    await connectDb();
                    const user = await User.findOne({ email : profile?.user.email });
                    if(!user){
                          const newUser = await  User.create({
                              name : profile?.user.name,
                              email : profile?.user.email,
                              image : profile?.user.image
                          })
                          await newUser.save();
                    }

                    return true 
                } catch (error) {
                        console.log(error.message)
                }
         }
    }
})

export {handleAuth as GET , handleAuth as POST };


