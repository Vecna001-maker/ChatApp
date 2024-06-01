import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI )
        console.log("MongoDB connected")
    } catch (error) {
        console.log(`Could Connect to DB ${error.message}`)
    }
};
export default connectDB;