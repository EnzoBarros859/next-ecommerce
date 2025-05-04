'use client';

import { Filter } from 'lucide-react';

interface ProductFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: string;
  setPriceRange: (range: string) => void;
  rating: string;
  setRating: (rating: string) => void;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
}

export default function ProductFilters({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  rating,
  setRating,
  categories
}: ProductFiltersProps) {
  return (
    <div className="w-full md:w-64 space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        
        {/* Category Filter */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Categories</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="category"
                value="all"
                checked={selectedCategory === 'all'}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">All Categories</span>
            </label>
            {categories.map((category) => (
              <label key={category.id} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category.slug}
                  checked={selectedCategory === category.slug}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{category.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Price Range</h4>
          <div className="space-y-2">
            {[
              { value: 'all', label: 'All Prices' },
              { value: 'under-100', label: 'Under $100' },
              { value: '100-500', label: '$100 - $500' },
              { value: '500-1000', label: '$500 - $1000' },
              { value: 'over-1000', label: 'Over $1000' }
            ].map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name="price"
                  value={option.value}
                  checked={priceRange === option.value}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Rating</h4>
          <div className="space-y-2">
            {[
              { value: 'all', label: 'All Ratings' },
              { value: '4+', label: '4 Stars & Up' },
              { value: '3+', label: '3 Stars & Up' }
            ].map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name="rating"
                  value={option.value}
                  checked={rating === option.value}
                  onChange={(e) => setRating(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 