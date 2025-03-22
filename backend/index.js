import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import userRoute from './route/user.route.js';
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(express.json());

app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 5002;
const URI = process.env.MONGODB_URI; 

console.log("MongoDB URI:", URI); // Log the MongoDB URI for debugging

try {
    await mongoose.connect(URI);
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
        console.log(`Server is Running on port ${PORT}`);
    });
} catch (error) {
    console.log(error);
}

app.use("/api/user", userRoute);
