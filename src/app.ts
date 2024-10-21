import express from 'express';
import dotenv from 'dotenv';
import photoRoutes from './routes/photoRoutes';
import orderRoutes from './routes/orderRoutes';
import connectDB from './utils/db';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/photos', photoRoutes);
app.use('/orders', orderRoutes);

// Connect to MongoDB
connectDB();

export default app;
