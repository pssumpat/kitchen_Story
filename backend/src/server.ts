import dotenv from 'dotenv';
dotenv.config();

import express = require("express");
import cors = require("cors");
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';

dbConnect();


const app = express();

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use(express.json());

app.use("/api/foods",foodRouter);

app.use("/api/users",userRouter);

const port = 5000;

app.listen(port, () => {
    console.log("website served on http://localhost:" +port);
})
