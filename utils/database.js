import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if(isConnected) {
        console.log('MongoDB is connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName:'notable'
        })
        isConnected = true;
        console.log('MongoDB is connected');
    } catch (error) {
        console.log(error);
    }
}