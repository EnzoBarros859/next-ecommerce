'use client';

import ProductCard from './ProductCard';
import ProductCardList from './ProductCardList';
import { Product } from '@/data/products';

interface ProductGridProps {
  products: Product[];
  viewMode: 'grid' | 'list';
}

export default function ProductGrid({ products, viewMode }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">No products found</h3>
        <p className="mt-2 text-sm text-gray-500">
          Try adjusting your filters to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div>
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showCategory={true}
              showRating={true}
              showWishlist={true}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <ProductCardList
              key={product.id}
              product={product}
              showCategory={true}
              showRating={true}
              showWishlist={true}
            />
          ))}
        </div>
      )}
    </div>
  );
} 