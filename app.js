// app.js
const express = require('express');
const app = express();
const port = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Define a route for /about
app.get('/about', (req, res) => {
  res.send('About page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
