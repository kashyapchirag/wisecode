import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import dbConnection from './config/db.js';
import problemRoutes from './routes/problemRoutes.js'
import authRoutes from './routes/authRoutes.js'
import cookieParser from "cookie-parser";


const app = express();

//env setup
dotenv.config();

//db connection
dbConnection();

// cors setup
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://wise-code-delta.vercel.app"
    ],
    credentials: true
}));

app.use(cookieParser());

// global middleware setup
app.use(express.json())

//getting routes
app.use('/api', problemRoutes)
app.use('/api', authRoutes)

export default app;