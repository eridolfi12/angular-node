const express = require('express');

const app = express();

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
