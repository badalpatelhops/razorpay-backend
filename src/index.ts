import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import paymentRouter from './routers/paymentRoutes';
import cors from 'cors';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())

app.use('/api/v1/payment', paymentRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
export const razorpayInstance = new Razorpay({ // key_id and key_secret will be stored in env
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});
