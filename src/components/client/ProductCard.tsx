'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Product } from '@/data/products';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
  showRating?: boolean;
  showWishlist?: boolean;
  className?: string;
}

export default function ProductCard({
  product,
  showCategory = true,
  showRating = true,
  showWishlist = true,
  className = '',
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group ${className}`}
    >
      <div className="relative h-64">
        <Image
          src={product.image}
          alt={product.description}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {showWishlist && (
          <button
            onClick={toggleWishlist}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10"
          >
            <Star
              className={`h-5 w-5 transition-colors duration-300 ${
                isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-400'
              }`}
            />
          </button>
        )}
      </div>
      <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
        <div className="flex-grow">
          {showCategory && (
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">{product.category}</span>
              {showRating && (
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-sm">{product.rating.rate}</span>
                  <span className="text-gray-500 ml-1 text-sm">({product.rating.count})</span>
                </div>
              )}
            </div>
          )}
          <h2 className="text-xl font-semibold mb-3 line-clamp-2 text-gray-800 group-hover:text-blue-600 transition-colors">
            {product.description}
          </h2>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price}
              <span className="text-sm text-gray-500 ml-1">USD</span>
            </span>
          </div>
          <div className="bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View Details
          </div>
        </div>
      </div>
    </Link>
  );
} 