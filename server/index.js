import express from 'express'
import cors from 'cors'
import { connectToDatabase } from './config/db.js';
import userRoutes from './routes/userRoutes.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: 'http://localhost:5173',
}))

 app.use("/api", userRoutes);

const startServer = async () => {
    try {
        
        app.listen(5000, () => console.log("Server is running on port 5000"))
        await connectToDatabase()
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1); 
    }
};

startServer();

