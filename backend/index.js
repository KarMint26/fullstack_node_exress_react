import { configDotenv } from "dotenv";
import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
configDotenv();

app.use(cors())
app.use(express.json()) // dapat menerima request dalam bentuk json

app.use(UserRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})