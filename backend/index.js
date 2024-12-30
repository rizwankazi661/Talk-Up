const express = require('express');
const { chats } = require('./dummyData/data');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.get("/", (req,res)=> {
    res.send("API is running")
})

app.get("/users", (req,res)=> {
    res.send(chats);
})

app.get("/users/:id", (req,res)=> {
    const singleChat = chats.find((chat)=> chat._id === req.params.id);
    res.send(singleChat);
})

app.listen(PORT, console.log(`Server running on PORT: ${PORT}` ));