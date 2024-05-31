import express from 'express'
import chats from './data/data.js'
import { config as configDotenv } from 'dotenv';
const app = express();
configDotenv();
 const PORT = process.env.PORT || 5000; 
app.listen(PORT, console.log(`Chal rha hai ${PORT} par`));
app.get('/', (req, res) => {
    res.send(chats)
})
