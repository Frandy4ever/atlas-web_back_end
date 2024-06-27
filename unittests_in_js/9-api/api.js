const express = require('express');
const app = express();
const port = 7865;

app.param('id', (req, res, next, id) => {
  if (/^\d+$/.test(id)) {
    next();
  } else {
    res.status(404).send('Invalid cart ID');
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = server;
