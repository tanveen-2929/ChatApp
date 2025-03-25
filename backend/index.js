import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import messageRoute from "./route/message.route.js";
import { app } from "./socketIO/server.js";
import { server } from "./socketIO/server.js";

dotenv.config();

app.use(express.json());

app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 5002;
const URI = process.env.MONGODB_URI;

app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// Handle 404 errors for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Requested resource could not be found." });
});

try {
  await mongoose.connect(URI);
  console.log("MongoDB Connected");
  server.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
}
