import express from 'express'

const app = express();
app.listen(5000, console.log("Chal rha hai 5000 par"));
app.get('/', (req, res) => {
    res.send("Api is Running")
})