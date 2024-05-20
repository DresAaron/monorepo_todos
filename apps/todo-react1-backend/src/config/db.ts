import mongoose from "mongoose";

const MONGO_URL = "mongodb://root:example@localhost:27017";
export const connectDB = async () => {
  console.log("Connecting to MongoDB...");
  try {
    await mongoose.connect(MONGO_URL, {
      dbName: "todo-app",
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
