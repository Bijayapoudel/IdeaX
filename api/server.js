// server.js

const mongoose = require('mongoose');
const express = require('express');
const { json } = require('express');
const Post = require('./models/postSchema');
// Your code here

const app = express();
const port = 3001; // Set your preferred port

app.use(json());


//mongodb connection.......
const DB = 'mongodb+srv://poudelbijaya25:15akwZrbdm0oqWYo@ideaxhack.gbkrlto.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('No Connection: ', err));


app.post('/createpost', async (req, res) => {
    // console.log(req.body);
    try {
        const { title, summary, content } = req.body;
        const newPost = new Post({ title, summary, content });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
