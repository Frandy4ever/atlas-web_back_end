import express from 'express';
import router from './routes/index.js';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 1245;

app.set('database', path.join(__dirname, 'database.csv'));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
