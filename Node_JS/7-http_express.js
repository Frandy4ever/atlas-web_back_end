const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const databaseFile = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(databaseFile)
    .then((messages) => {
      res.send(['This is the list of our students', ...messages].join('\n'));
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});

module.exports = app;
