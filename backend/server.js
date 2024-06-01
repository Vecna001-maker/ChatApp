import express from 'express'
import chats from './data/data.js'
import { config as configDotenv } from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import User from './models/userModel.js';
const app = express();
app.use(express.json());

configDotenv();
connectDB();
 const PORT = process.env.PORT || 5000; 
app.listen(PORT, console.log(`Chal rha hai ${PORT} par`));
app.get('/', (req, res) => {
    res.send(chats)
})
app.use( '/api/user', userRoutes)
