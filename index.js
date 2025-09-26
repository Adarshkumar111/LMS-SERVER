import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

connectDB();

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/auth", userRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
