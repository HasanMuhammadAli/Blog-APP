import { error } from "console";
import mongoose from "mongoose";
const URl = "mongoose://localhost:27017/Todo";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(URl);
        console.log("MongoDB connected.");
    }
    catch{
        console.log(error);
        process.exit(1);
    }
}
export default connectDB;