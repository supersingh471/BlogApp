//rootRouter
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import rootRouter from "./routes/index";

import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", rootRouter);

app.listen(3000);
console.log("Listening on port 3000");