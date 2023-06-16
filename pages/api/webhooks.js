import { Readable } from 'stream';
import Stripe from 'stripe';

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const webhookHandler = async (req, res) => {
  const buf = await new Promise((resolve, reject) => {
    const chunks = [];
    req
      .on('data', (chunk) => chunks.push(chunk))
      .on('end', () => resolve(Buffer.concat(chunks)))
      .on('error', reject);
  });

  const payload = buf.toString();
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, 'we_1NJfQuJVAR9FxLkwjxW7leGD');
  } catch (err) {
    console.log('Webhook signature verification failed.');
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
switch (event.type) {
  case 'payment_intent.succeeded':
    // Handle payment_intent.succeeded event
    console.log('Payment succeeded:', event.data.object);
    break;
  case 'payment_intent.payment_failed':
    // Handle payment_intent.payment_failed event
    console.log('Payment failed:', event.data.object);
    break;
  case 'invoice.created':
    // Handle invoice.created event
    console.log('Invoice created:', event.data.object);
    break;
  // Add other event handlers as needed
  default:
    console.log(`Unhandled event type: ${event.type}`);
}

  res.status(200).json({ received: true });
};

export default webhookHandler;
