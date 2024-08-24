import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const connectMongoose = async () => {
  try {
    const connectInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected, host on", connectInstance.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export { connectMongoose };
