import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/client/Layout'
import { ArrowRight, Star, Truck, Shield, RefreshCw } from 'lucide-react'
import ProductCard from '@/components/client/ProductCard'
import { products } from '@/data/products'
export default function Home() {
  const featuredProducts = products.slice(0, 4)
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Discover Amazing Products
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Shop the latest trends and find your perfect style
              </p>
              <Link
                href="/products"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/images/slide1.png"
                alt="Hero"
                fill
                className="object-cover rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Truck className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your products delivered within 2-3 business days</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment processing with multiple options</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <RefreshCw className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day hassle-free return policy on all products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            View All
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
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

      {/* Categories */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Electronics', 'Clothing', 'Home & Kitchen', 'Beauty'].map(
              (category) => (
                <Link
                  key={category}
                  href={`/products?category=${category.toLowerCase()}`}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <p className="text-gray-600">Shop the latest {category}</p>
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest products, exclusive offers, and shopping tips
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
