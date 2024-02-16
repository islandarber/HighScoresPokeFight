import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Database connected");
    return mongoose.connection;
  } catch (error) {
    console.log("Database connection error", error);
    process.exit(1);
  }
};