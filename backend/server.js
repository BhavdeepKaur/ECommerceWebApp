import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import data from './data.js';
import dotenv from 'dotenv';
import config from './config.js';
import mongoose from 'mongoose';
import router from './routes/productRoute.js';
import router1 from './routes/uploadRoute.js';

/*const productRoute = require('../backend/routes/productRoute')*/

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api/uploads', router1);

app.use('/api/products', router);

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});