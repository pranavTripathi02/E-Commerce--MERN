require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
app.use(express.json());

const productRouter = require('./routes/products');

app.use('/api/v1/products', productRouter);

const ErrorHandlerMiddleware = require('./middleware/ErrorHandler');

app.use(ErrorHandlerMiddleware);

const connectDB = require('./db/connect');

const port = process.env.PORT || 6000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
    connectDB(process.env.MONGO_URI);
  } catch (err) {
    console.error(err);
  }
};

start();
