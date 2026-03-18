import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import dbConnection from './config/db.js';
import problemRoutes from './routes/problemRoutes.js'

const app = express();

//env setup
dotenv.config();

//db connection
dbConnection();

// cors setup
app.use(cors())

// global middleware setup
app.use(express.json())

//getting routes
app.use('/api', problemRoutes)

export default app;