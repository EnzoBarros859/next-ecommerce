import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { products } from '@/data/products';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
});

export async function POST() {
  try {
    const results = [];
    const errors = [];

    for (const product of products) {
      try {
        // Create the product first
        const stripeProduct = await stripe.products.create({
          name: product.title,
          metadata: {
            category: product.category,
            rating: product.rating.rate.toString(),
            ratingCount: product.rating.count.toString(),
            description: product.description,
          },
        });

        // Create a price for the product
        const price = await stripe.prices.create({
          unit_amount: Math.round(product.price * 100), // Convert to cents
          currency: 'usd',
          product: stripeProduct.id,
        });

        // Update the product with the default price
        await stripe.products.update(stripeProduct.id, {
          default_price: price.id,
        });

        results.push({
          id: stripeProduct.id,
          name: stripeProduct.name,
          price: price.unit_amount ? price.unit_amount / 100 : 0,
        });
      } catch (error) {
        errors.push({
          product: product.title,
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    }

    return NextResponse.json({
      success: true,
      added: results.length,
      failed: errors.length,
      results,
      errors,
    });
  } catch (error) {
    console.error('Error seeding products:', error);
    return NextResponse.json(
      { error: 'Failed to seed products' },
      { status: 500 }
    );
  }
} 