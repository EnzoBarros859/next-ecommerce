'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Product } from '@/data/products';
import Link from 'next/link';

interface ProductCardListProps {
  product: Product;
  showCategory?: boolean;
  showRating?: boolean;
  showWishlist?: boolean;
}

export default function ProductCardList({
  product,
  showCategory = false,
  showRating = false,
  showWishlist = false
}: ProductCardListProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full sm:w-48 h-48 relative">
        <img
          src={product.image}
          alt={product.description}
          className="w-full h-full object-cover rounded-lg"
        />
        {showWishlist && (
          <button
            onClick={toggleWishlist}
            className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition-colors ${
              isWishlisted
                ? 'bg-red-100 text-red-600 hover:bg-red-200'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Heart className="h-5 w-5" fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
        )}
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {showCategory && (
            <span className="text-sm text-blue-600 font-medium">
              {product.category}
            </span>
          )}
          <h3 className="text-lg font-semibold text-gray-900 mt-1">
            {product.description}
          </h3>
          <p className="text-gray-600 mt-2 line-clamp-2">
            {product.description}
          </p>
          {showRating && (
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating.rate)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-1">
                ({product.rating.count})
              </span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <Link
            href={`/products/${product.id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
} 