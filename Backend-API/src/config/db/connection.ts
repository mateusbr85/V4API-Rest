import mongoose, { connection } from "mongoose";
import doteEnvConfig from "@config/doteEnv";
doteEnvConfig
export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!,{})
        console.log('[database mongoDB] connected')
    }catch(error){ 
        throw error;
    }
}