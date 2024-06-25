const http = require('http');

const port = 1245;

const app = http.createServer((_, request) => {
  request.statusCode = 200;
  request.setHeader('Content-Type', 'text/plain');
  request.end('Hello Holberton School!');
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});

module.exports = app;
