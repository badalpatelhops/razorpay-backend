import { razorpayInstance } from "../index";



const paymentController = {

    orderRazorpay: async (req: any, res: any) => {
        try {
            console.log('req.body', req.body);
            const options = {
                amount: req.body.amount * 100, // amount == Rs 10
                currency: "INR", // currency will 
                receipt: "test"
            };
            const orderDetails = await razorpayInstance.orders.create(options);
            console.log('orderDetails......', orderDetails);
            return res.send({ message: 'orderCreate', orderDetails });
        } catch (err) {
            return res.status(500).send(err);
        }
    }
}

export default paymentController;