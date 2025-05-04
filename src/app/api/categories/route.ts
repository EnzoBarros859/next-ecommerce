import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
});

export async function GET() {
  try {
    const products = await stripe.products.list({
      limit: 100,
    });

    // Get unique categories from products
    const categories = Array.from(
      new Set(
        products.data.map((product) => product.metadata.category || 'Uncategorized')
      )
    ).sort();

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
} 