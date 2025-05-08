import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-04-30.basil',
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    if (session.payment_status === 'paid') {
      return NextResponse.json({ 
        status: 200,
        message: 'Payment successful! Your order has been processed.',
        session: {
          id: session.id,
          amount_total: session.amount_total,
          customer_details: session.customer_details,
          payment_status: session.payment_status
        }
      });
    } else {
      return NextResponse.json({ 
        status: 400,
        message: 'Payment is still processing. Please wait a moment.',
        session: {
          id: session.id,
          payment_status: session.payment_status
        }
      });
    }
  } catch (error) {
    console.error('Error retrieving session:', error);
    return NextResponse.json({ 
      status: 500,
      error: 'Failed to retrieve session',
      message: 'Unable to verify payment status. Please contact support.'
    });
  }
}
