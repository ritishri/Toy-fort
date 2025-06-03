import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import cookieParser from 'cookie-parser';

const app = express(); // ✅ Move this to the top before using `app`

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true
}));

app.use("/api", userRoutes);
app.use("/api/admin", adminRoutes);

const startServer = async () => {
    try {
        await connectToDatabase(); // ✅ Wait for DB before starting the server
        app.listen(5000, () => console.log("Server is running on port 5000"));
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
};

startServer();
