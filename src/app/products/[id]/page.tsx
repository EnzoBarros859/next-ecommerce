'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ShoppingCart, Heart, Star, ChevronLeft } from 'lucide-react';
import { products } from '@/data/products';
import Header from '@/components/client/Header';
import Footer from '@/components/client/Footer';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/client/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const product = products.find(p => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  // Get similar products (products from the same category)
  const similarProducts = products
    .filter(p => 
      p.category === product?.category && 
      p.id !== product?.id
    )
    .slice(0, 4); // Show up to 4 similar products

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-blue-100 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Product Not Found</h1>
            <Link href="/products" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    router.push('/cart');
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/products" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  onClick={toggleWishlist}
                  className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-colors ${
                    isWishlisted
                      ? 'bg-red-100 text-red-600 hover:bg-red-200'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Heart className="h-6 w-6" fill={isWishlisted ? 'currentColor' : 'none'} />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-blue-600 font-medium">
                    {product.category}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-2">
                    {product.title}
                  </h1>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating.rate)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      ({product.rating.count} reviews)
                    </span>
                  </div>
                </div>

                <div className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </div>

                <p className="text-gray-600">
                  {product.description}
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 border-x border-gray-200 text-gray-600">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 flex items-center justify-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Product Details
                  </h2>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Category</span>
                      <span className="text-gray-900">{product.category}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rating</span>
                      <span className="text-gray-900">{product.rating.rate} / 5</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Reviews</span>
                      <span className="text-gray-900">{product.rating.count}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    showCategory={true}
                    showRating={true}
                    showWishlist={true}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 