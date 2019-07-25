const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// user: dbuser pass: deIihxkcZNfBuAlM

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post((req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully!',
    data: post
  });
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {id: 0, title: 'Post from Server', content: 'This is coming from the server!'},
    {id: 1, title: 'Post from Server', content: 'This is coming from the server!'},
    {id: 2, title: 'Post from Server', content: 'This is coming from the server!'},
    {id: 3, title: 'Post from Server', content: 'This is coming from the server!'},
  ];

  res.status(200).json({
    message: 'Posts fetched successfully!',
    data: posts
  });
});

module.exports = app;
