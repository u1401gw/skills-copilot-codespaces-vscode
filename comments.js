// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Use body parser to parse JSON
app.use(bodyParser.json());

// Read comments from file
function readComments() {
  const comments = fs.readFileSync(path.join(__dirname, 'comments.json'));
  return JSON.parse(comments);
}

// Write comments to file
function writeComments(comments) {
  fs.writeFileSync(path.join(__dirname, 'comments.json'), JSON.stringify(comments, null, 2));
}

// Get all comments
app.get('/comments', (req, res) => {
  const comments = readComments();
  res.json(comments);
});

// Create a new comment
app.post('/comments', (req, res) => {
  const comments = readComments();
  const newComment = req.body;
  comments.push(newComment);
  writeComments(comments);
  res.json(newComment);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
