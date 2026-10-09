import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser()); // Allow you to parse the cookie

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on Port " + PORT);
  connectDB();
});
