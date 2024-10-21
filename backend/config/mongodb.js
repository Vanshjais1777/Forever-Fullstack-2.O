import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.once("connected", () => {
    console.log("DB connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}`);
};

export default connectDB;
