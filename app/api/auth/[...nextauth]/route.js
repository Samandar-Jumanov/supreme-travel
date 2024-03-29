import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import models from '@/models/models';
import  connectToDb  from '@/utils/connectMongo';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  
  callbacks: {
    async session({ session }) {
      
      const sessionUser = await models.User.findOne({ email: session.user.email }).maxTimeMS(20000000)
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({  profile  }) {
      try {
        await connectToDb();

        // check if user already exists
        const userExists = await models.User.findOne({ email: profile.email }).maxTimeMS(20000000)

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  }
})

export { handler as GET, handler as POST }
