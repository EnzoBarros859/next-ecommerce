'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { ArrowUpDown, Filter, Grid, List } from 'lucide-react';
import Header from '@/components/client/Header';
import Footer from '@/components/client/Footer';
import ProductFilters from '@/components/client/ProductFilters';
import ProductGrid from '@/components/client/ProductGrid';
import ProductPagination from '@/components/client/ProductPagination';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [rating, setRating] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(12);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = priceRange === 'all' || (
      priceRange === 'under-100' && product.price < 100 ||
      priceRange === '100-500' && product.price >= 100 && product.price <= 500 ||
      priceRange === '500-1000' && product.price > 500 && product.price <= 1000 ||
      priceRange === 'over-1000' && product.price > 1000
    );
    const ratingMatch = rating === 'all' || (
      rating === '4+' && product.rating.rate >= 4 ||
      rating === '3+' && product.rating.rate >= 3
    );
    return categoryMatch && priceMatch && ratingMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating.rate - a.rating.rate;
      default: return 0;
    }
  });

  // Calculate pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Top Section - Title, Sort, and View Toggle */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-gray-900">Our Jewelry Collection</h1>
              <p className="text-gray-600">Browse our exquisite collection of handcrafted jewelry pieces</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-10 pr-8 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500 bg-white"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ArrowUpDown className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="relative">
                <select
                  value={productsPerPage}
                  onChange={(e) => {
                    setProductsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="appearance-none pl-10 pr-8 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500 bg-white"
                >
                  <option value="12">12 per page</option>
                  <option value="24">24 per page</option>
                  <option value="36">36 per page</option>
                  <option value="48">48 per page</option>
                </select>
                <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'grid'
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'list'
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side - Filters */}
            <div className="w-full md:w-64">
              <ProductFilters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                rating={rating}
                setRating={setRating}
                categories={categories}
              />
            </div>

            {/* Right Side - Products */}
            <div className="flex-1">
              <ProductGrid products={currentProducts} viewMode={viewMode} />
              <ProductPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 