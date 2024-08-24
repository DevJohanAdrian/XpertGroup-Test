import { env } from "@/common/utils/envConfig";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGO_URI || "mongodb://localhost:27017/mydatabase");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error MongoDB: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
