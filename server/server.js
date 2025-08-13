import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './src/routes/users.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(process.env.MONGO_URI);

app.listen(3001, () => console.log("SERVER STARTED on port 3001"));