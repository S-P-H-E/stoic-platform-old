import { buffer } from 'micro';
import Stripe from 'stripe';

// Retrieve the webhook signing secret from environmental variables
const webhookSigningSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // Set your preferred Stripe API version
  apiVersion: '2022-11-15',
});

const webhookHandler = async (req, res) => {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const signature = req.headers['stripe-signature'];

    let event;

    try {
      // Verify the webhook signature
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        signature,
        webhookSigningSecret
      );
    } catch (err) {
      console.error('Webhook error:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event based on its type
    if (event.type === 'checkout.session.completed') {
      // Handle checkout.session.completed event
      console.log('Checkout session completed:', event.data.object);
      // Perform any necessary actions or trigger desired functionality
    }

    // Return a 200 response to acknowledge receipt of the event
    res.status(200).send('Received');
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default webhookHandler;