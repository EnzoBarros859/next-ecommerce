'use client';

import { Filter } from 'lucide-react';

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sort: string;
  onSortChange: (sort: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  isLoading?: boolean;
  onClearFilters: () => void;
}

export default function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  sort,
  onSortChange,
  priceRange,
  onPriceRangeChange,
  isLoading = false,
  onClearFilters,
}: ProductFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button
          onClick={onClearFilters}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Category</h4>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              value="all"
              checked={selectedCategory === 'all'}
              onChange={(e) => onCategoryChange(e.target.value)}
              disabled={isLoading}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-sm text-gray-700">All Categories</span>
          </label>
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
                disabled={isLoading}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort Filter */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Sort By</h4>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="sort"
              value=""
              checked={sort === ''}
              onChange={(e) => onSortChange(e.target.value)}
              disabled={isLoading}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-sm text-gray-700">Default</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="sort"
              value="price-low"
              checked={sort === 'price-low'}
              onChange={(e) => onSortChange(e.target.value)}
              disabled={isLoading}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-sm text-gray-700">Price: Low to High</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="sort"
              value="price-high"
              checked={sort === 'price-high'}
              onChange={(e) => onSortChange(e.target.value)}
              disabled={isLoading}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-sm text-gray-700">Price: High to Low</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="sort"
              value="rating"
              checked={sort === 'rating'}
              onChange={(e) => onSortChange(e.target.value)}
              disabled={isLoading}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-sm text-gray-700">Top Rated</span>
          </label>
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Price Range</h4>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="price-range"
              value="all"
              checked={priceRange[0] === 0 && priceRange[1] === 99999999}
              onChange={() => onPriceRangeChange([0, 99999999])}
              disabled={isLoading}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-sm text-gray-700">All Prices</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="price-range"
              value="under-100"
              checked={priceRange[0] === 0 && priceRange[1] === 100}
              onChange={() => onPriceRangeChange([0, 100])}
              disabled={isLoading}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-sm text-gray-700">Under $100</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="price-range"
              value="100-500"
              checked={priceRange[0] === 100 && priceRange[1] === 500}
              onChange={() => onPriceRangeChange([100, 500])}
              disabled={isLoading}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-sm text-gray-700">$100 - $500</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="price-range"
              value="500-1000"
              checked={priceRange[0] === 500 && priceRange[1] === 1000}
              onChange={() => onPriceRangeChange([500, 1000])}
              disabled={isLoading}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-sm text-gray-700">$500 - $1000</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="price-range"
              value="over-1000"
              checked={priceRange[0] === 1000 && priceRange[1] === 10000}
              onChange={() => onPriceRangeChange([1000, 10000])}
              disabled={isLoading}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-sm text-gray-700">Over $1000</span>
          </label>
        </div>
      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="flex items-center justify-center py-2">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
} 