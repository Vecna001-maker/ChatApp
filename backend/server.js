import express from 'express'
import chats from './data/data.js'

const app = express();
app.listen(5000, console.log("Chal rha hai 5000 par"));
app.get('/', (req, res) => {
    res.send(chats)
})
