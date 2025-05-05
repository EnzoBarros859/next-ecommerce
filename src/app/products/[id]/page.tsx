'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ShoppingCart, Heart, Star, ChevronLeft, Share2, Truck, Shield, RefreshCw } from 'lucide-react';
import Header from '@/components/client/Header';
import Footer from '@/components/client/Footer';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError('Failed to load product');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <div className="container mx-auto px-4 py-12">
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Error</h2>
              <p className="text-gray-600">{error || 'Product not found'}</p>
              <Link
                href="/products"
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to Products
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/products"
                className="inline-flex items-center text-gray-500 hover:text-gray-700"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to Products
              </Link>
            </div>

            {/* Product Content */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Image Section */}
                <div className="relative">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-colors ${
                      isWishlisted
                        ? 'bg-red-100 text-red-600 hover:bg-red-200'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Heart className="h-6 w-6" fill={isWishlisted ? 'currentColor' : 'none'} />
                  </button>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <span className="text-sm font-medium text-blue-600">{product.category}</span>
                    <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(product.rating.rate)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">
                        ({product.rating.count} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </div>

                  <p className="text-gray-600 leading-relaxed">{product.description}</p>

                  {/* Quantity Selector */}
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-700">Quantity:</span>
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-gray-600 hover:text-gray-900"
                      >
                        -
                      </button>
                      <span className="px-3 py-2 text-gray-900">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 text-gray-600 hover:text-gray-900"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => addToCart(product, quantity)}
                      className="flex-1 flex items-center justify-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      
                      <Link
                        href="/cart"
                        className="inline-flex items-center text-white-500"
                      >
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Add to Cart
                      </Link>
                      
                    </button>
                    <button className="flex-1 flex items-center justify-center bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                      <Share2 className="h-5 w-5 mr-2" />
                      Share
                    </button>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
                    <div className="flex items-center space-x-3">
                      <Truck className="h-6 w-6 text-blue-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">Free Shipping</h4>
                        <p className="text-sm text-gray-500">On orders over $100</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-blue-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">Secure Payment</h4>
                        <p className="text-sm text-gray-500">100% secure payment</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RefreshCw className="h-6 w-6 text-blue-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">Easy Returns</h4>
                        <p className="text-sm text-gray-500">30-day return policy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 