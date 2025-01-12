import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://shivamsharmaug21:SyjzjOXJ8n0zrTZp@cluster0.0jnlm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB is connected: " + conn.connection.host);
  } catch (error) {
    console.log("MongoDB connection error: " + error);
  }
};
