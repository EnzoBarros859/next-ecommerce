import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// Test webhook secret
console.log('Webhook Secret:', webhookSecret ? 'Secret is set' : 'Secret is missing');
if (!webhookSecret) {
  console.error('STRIPE_WEBHOOK_SECRET is not set in environment variables');
}

// Disable body parsing, need raw body for Stripe webhook
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(request: Request) {
  try {
    // Get the raw body as text
    const rawBody = await request.text();
    const signature = headers().get('stripe-signature');

    // Debug information
    const allHeaders = Object.fromEntries(headers().entries());
    console.log('=== Webhook Debug Information ===');
    console.log('Request Headers:', JSON.stringify(allHeaders, null, 2));
    console.log('Stripe Signature:', signature);
    console.log('Webhook Secret:', webhookSecret ? '✓ Set' : '✗ Missing');
    console.log('Raw Body Length:', rawBody.length);
    console.log('Raw Body Preview:', rawBody.substring(0, 100) + '...');

    if (!signature) {
      console.error('No signature found in request headers');
      return NextResponse.json(
        { error: 'No signature found in request' },
        { status: 400 }
      );
    }

    if (!webhookSecret) {
      console.error('Webhook secret is not configured');
      return NextResponse.json(
        { error: 'Webhook secret is not configured' },
        { status: 500 }
      );
    }

    let event: Stripe.Event;

    try {
      console.log('Attempting to verify webhook signature...');
      console.log('Signature header value:', signature);
      console.log('Signature header type:', typeof signature);
      console.log('Webhook secret type:', typeof webhookSecret);
      console.log('Raw body preview (first 200 chars):', rawBody.substring(0, 200));
      
      // Verify the event using the raw body and signature
      event = stripe.webhooks.constructEvent(
        rawBody,
        signature,
        webhookSecret
      );
      console.log('✓ Webhook signature verified successfully');
      console.log('Event type:', event.type);
      console.log('Event ID:', event.id);
      console.log('Event object type:', event.data.object.object);
      console.log('Event created:', event.created);
    } catch (err) {
      console.error('=== Webhook Signature Verification Failed ===');
      console.error('Error:', err);
      console.error('Signature:', signature);
      console.error('Webhook Secret Length:', webhookSecret.length);
      console.error('Raw Body Length:', rawBody.length);
      
      // Check if the error is related to signature verification
      if (err instanceof Error) {
        if (err.message.includes('No signatures found')) {
          console.error('No signatures found in the request');
        } else if (err.message.includes('No signatures found matching')) {
          console.error('No signatures found matching the expected signature');
        } else if (err.message.includes('Invalid signature')) {
          console.error('Invalid signature format');
        }
      }

      return NextResponse.json(
        { error: 'Webhook signature verification failed' },
        { status: 400 }
      );
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('Processing checkout.session.completed:', session.id);
        
        // Parse the items from metadata
        const items = JSON.parse(session.metadata?.items || '[]');
        
        // Create order object
        const order = {
          id: session.id,
          status: 'completed' as const,
          amount: session.amount_total ? session.amount_total / 100 : 0,
          date: new Date().toISOString(),
          items: items.map((item: any) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
        };

        console.log('Created order:', order);

        // Store order in localStorage (in a real app, you would store this in a database)
        // We'll use a custom header to trigger a client-side event
        const response = NextResponse.json({ received: true });
        response.headers.set('X-Order-Event', JSON.stringify({
          type: 'success',
          message: `Payment successful! Order #${session.id} has been processed.`,
          order,
        }));
        
        return response;
      }
      
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('Processing payment_intent.succeeded:', paymentIntent.id);
        const response = NextResponse.json({ received: true });
        response.headers.set('X-Order-Event', JSON.stringify({
          type: 'success',
          message: `Payment intent ${paymentIntent.id} succeeded.`,
        }));
        return response;
      }
      
      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('Processing payment_intent.payment_failed:', paymentIntent.id);
        const response = NextResponse.json({ received: true });
        response.headers.set('X-Order-Event', JSON.stringify({
          type: 'error',
          message: `Payment failed for intent ${paymentIntent.id}.`,
        }));
        return response;
      }

      default: {
        console.log('Unhandled event type:', event.type);
        return NextResponse.json({ received: true });
      }
    }
  } catch (error) {
    console.error('=== Error Processing Webhook ===');
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
} 