'use client';

import Link from 'next/link';
import { Home, ShoppingCart, ChevronLeft } from 'lucide-react';
import Header from '@/components/client/Header';
import Footer from '@/components/client/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-lg mb-8">
              <div className="text-6xl font-bold text-blue-600">404</div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, we've got plenty of beautiful jewelry waiting for you!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Home className="h-5 w-5 mr-2" />
                Go to Homepage
              </Link>
              
              <Link
                href="/products"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors border border-blue-600"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Browse Products
              </Link>
            </div>

            <div className="mt-8">
              <Link
                href="javascript:history.back()"
                className="inline-flex items-center text-gray-600 hover:text-blue-600"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 