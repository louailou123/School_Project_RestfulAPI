import express from "express";
import dotenv from "dotenv";
import { json } from "express";
import mongoose from "mongoose";
import studentRoute from "./Routes/studentRoute.js";
import teacherRoute from "./Routes/teacherRoute.js"
// Importing the Student model
import homeRoute from "./Routes/homeRoute.js";
import cors from "cors";

const app=express();

app.use(cors());
dotenv.config();
app.use(json());


//connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to MongoDB");}).catch((err) => {
  console.error("Error connecting to MongoDB:", err); });
  app.use (studentRoute)
app.use(homeRoute);
app.use(teacherRoute)
  // connect to routes

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
}) 