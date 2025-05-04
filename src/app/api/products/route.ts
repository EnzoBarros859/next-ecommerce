import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Product } from '@/types/product';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
});

interface FormattedProduct extends Omit<Product, 'id'> {
  id: string;
}

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get a list of products
 *     description: Retrieve products from Stripe with optional filtering and pagination
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter products by category
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [price-low, price-high, rating]
 *         description: Sort products by price or rating
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *         description: Minimum price filter
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *         description: Maximum price filter
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 12
 *         description: Number of items per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term to filter products
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       description:
 *                         type: string
 *                       price:
 *                         type: number
 *                       image:
 *                         type: string
 *                       category:
 *                         type: string
 *                       rating:
 *                         type: object
 *                         properties:
 *                           rate:
 *                             type: number
 *                           count:
 *                             type: number
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: number
 *                     totalPages:
 *                       type: number
 *                     currentPage:
 *                       type: number
 *                     limit:
 *                       type: number
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
export async function GET(request: Request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const sort = searchParams.get('sort');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const search = searchParams.get('search');

    // Fetch products from Stripe
    const products = await stripe.products.list({
      limit: 100,
      expand: ['data.default_price'],
    });

    // Format products
    let formattedProducts: FormattedProduct[] = products.data.map((product) => {
      const price = product.default_price as Stripe.Price;
      return {
        id: product.id,
        name: product.name,
        title: product.name,
        description: product.metadata.description || '',
        price: price ? (price.unit_amount || 0) / 100 : 0,
        image: product.images[0] || '/images/default.png',
        category: product.metadata.category || 'Uncategorized',
        rating: {
          rate: parseFloat(product.metadata.rating || '4.5'),
          count: parseInt(product.metadata.ratingCount || '100'),
        },
      };
    });

    // Apply search filter if specified
    if (search) {
      const searchLower = search.toLowerCase();
      formattedProducts = formattedProducts.filter(
        (product: FormattedProduct) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      );
    }

    // Apply category filter if specified
    if (category && category !== 'all') {
      formattedProducts = formattedProducts.filter(
        (product: FormattedProduct) => product.category === category
      );
    }

    // Apply price range filter if specified
    if (minPrice && maxPrice) {
      formattedProducts = formattedProducts.filter(
        (product: FormattedProduct) =>
          product.price >= parseFloat(minPrice) &&
          product.price <= parseFloat(maxPrice)
      );
    }

    // Apply sorting
    if (sort) {
      switch (sort) {
        case 'price-low':
          formattedProducts.sort((a: FormattedProduct, b: FormattedProduct) => a.price - b.price);
          break;
        case 'price-high':
          formattedProducts.sort((a: FormattedProduct, b: FormattedProduct) => b.price - a.price);
          break;
        case 'rating':
          formattedProducts.sort((a: FormattedProduct, b: FormattedProduct) => b.rating.rate - a.rating.rate);
          break;
      }
    }

    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = formattedProducts.slice(startIndex, endIndex);

    return NextResponse.json({
      products: paginatedProducts,
      pagination: {
        total: formattedProducts.length,
        totalPages: Math.ceil(formattedProducts.length / limit),
        currentPage: page,
        limit,
      },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
} 