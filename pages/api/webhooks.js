import { buffer } from 'micro';
import Cors from 'micro-cors';
import stripe from 'stripe';

const webhookHandler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const buf = await buffer(req);
      const secret = process.env.STRIPE_WEBHOOK_SECRET; // Your webhook signing secret

      // Verify the request signature
      const signature = req.headers['stripe-signature'];
      const event = stripe.webhooks.constructEvent(buf.toString(), signature, secret);

      // Handle the event
      // Your logic to process the event goes here

      res.status(200).send('Webhook received');
    } catch (error) {
      console.error('Error processing webhook:', error);
      res.status(400).send('Webhook error');
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

const cors = Cors({
  allowMethods: ['POST'],
});

export default cors(webhookHandler);
