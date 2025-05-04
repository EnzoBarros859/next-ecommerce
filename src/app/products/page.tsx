'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { useDebounce } from '@/hooks/useDebounce';
import ProductFilters from '@/components/client/ProductFilters';
import ProductGrid from '@/components/client/ProductGrid';
import Pagination from '@/components/client/Pagination';
import FilterDrawer from '@/components/client/FilterDrawer';

import Header from '@/components/client/Header';
import Footer from '@/components/client/Footer';
import { Filter, Search, Grid, List } from 'lucide-react';

interface PaginationData {
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sort, setSort] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 99999999]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    totalPages: 1,
    currentPage: 1,
    limit: 12,
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Debounce search query
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products with all filters
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams({
          category: selectedCategory,
          sort,
          minPrice: priceRange[0].toString(),
          maxPrice: priceRange[1].toString(),
          page: pagination.currentPage.toString(),
          limit: pagination.limit.toString(),
          ...(debouncedSearchQuery && { search: debouncedSearchQuery }),
        });

        const response = await fetch(`/api/products?${params}`);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data.products);
        setPagination(data.pagination);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [
    selectedCategory,
    sort,
    priceRange,
    pagination.currentPage,
    debouncedSearchQuery,
  ]);

  const handlePageChange = (page: number) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSort('');
    setPriceRange([0, 99999999]);
    setSearchQuery('');
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Top Section - Search and Title */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Products</h1>
                <button
                  onClick={() => setIsFilterDrawerOpen(true)}
                  className="md:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Filter className="h-5 w-5" />
                </button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Section - Filters */}
            <div className="hidden md:block w-72 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
                <ProductFilters
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  sort={sort}
                  onSortChange={setSort}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                  isLoading={loading}
                  onClearFilters={handleClearFilters}
                />
              </div>
            </div>

            {/* Right Section - Products */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Showing {products.length} of {pagination.total} products
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'grid'
                          ? 'bg-blue-100 text-blue-600'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <Grid className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'list'
                          ? 'bg-blue-100 text-blue-600'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <List className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Loading State */}
              {loading && (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                  {error}
                </div>
              )}

              {/* No Results State */}
              {!loading && !error && products.length === 0 && (
                <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600">Try adjusting your search or filters</p>
                </div>
              )}

              {/* Products Grid */}
              {!loading && !error && products.length > 0 && (
                <>
                  <ProductGrid products={products} viewMode={viewMode} />
                  <div className="mt-8">
                    <Pagination
                      currentPage={pagination.currentPage}
                      totalPages={pagination.totalPages}
                      onPageChange={handlePageChange}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        <FilterDrawer
          isOpen={isFilterDrawerOpen}
          onClose={() => setIsFilterDrawerOpen(false)}
        >
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sort={sort}
            onSortChange={setSort}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            isLoading={loading}
            onClearFilters={handleClearFilters}
          />
        </FilterDrawer>
      </div>
      <Footer />
    </div>
  );
} 