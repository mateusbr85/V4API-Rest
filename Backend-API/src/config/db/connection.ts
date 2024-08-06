import mongoose, { connection } from "mongoose";
import doteEnvConfig from "@config/doteEnv";
doteEnvConfig
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!,{})
        console.log('[database mongoDB] connected')
    }catch(error){ 
        console.error("Error connecting to mongoDb", error)
        process.exit(1)
    }
}