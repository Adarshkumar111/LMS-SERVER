import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.log("❌ Something went wrong:", error);
    process.exit(1);
  }
};

export default connectDB;
