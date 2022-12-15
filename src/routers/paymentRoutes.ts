import express from 'express';
import paymentController from '../controller/paymentController';

const router: any = express.Router();

// razorpay
router.post('/order', paymentController.orderRazorpay);

export default router;