import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
});

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = await stripe.products.retrieve(params.id, {
      expand: ['default_price'],
    });

    const price = product.default_price as Stripe.Price;
    const formattedProduct = {
      id: product.id,
      name: product.name,
      description: product.metadata.description || '',
      price: price ? (price.unit_amount || 0) / 100 : 0,
      image: product.images[0] || '/images/default.png',
      category: product.metadata.category || 'Uncategorized',
      rating: {
        rate: parseFloat(product.metadata.rating || '4.5'),
        count: parseInt(product.metadata.ratingCount || '100'),
      },
    };

    return NextResponse.json(formattedProduct);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
} 