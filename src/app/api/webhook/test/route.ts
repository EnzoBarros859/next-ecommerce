import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET() {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const stripeSecret = process.env.STRIPE_SECRET_KEY;

  const config = {
    webhookSecret: webhookSecret ? '✓ Set' : '✗ Missing',
    stripeSecret: stripeSecret ? '✓ Set' : '✗ Missing',
    headers: Object.fromEntries(headers().entries()),
  };

  return NextResponse.json(config);
} 