'use client';

import { useState } from 'react';
import { ShoppingCart, Trash2, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/client/Header';
import Footer from '@/components/client/Footer';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/client/ProductCard';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();
  const [isUpdating, setIsUpdating] = useState<number | null>(null);

  // Get unique categories from cart items
  const cartCategories = Array.from(new Set(items.map(item => item.category)));
  
  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setIsUpdating(productId);
    updateQuantity(productId, newQuantity);
    setTimeout(() => setIsUpdating(null), 500);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <ShoppingCart className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
              <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
              <Link
                href="/products"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <span className="text-gray-600">{totalItems} items</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row gap-4"
                >
                  <div className="w-full sm:w-32 h-32 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                      <div className="flex items-center mt-2">
                        <span className="text-lg font-bold text-gray-900">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-4 py-2 border-x border-gray-200 text-gray-600">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Order Summary
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-semibold text-gray-900">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Proceed to Checkout
                  </button>
                  <Link
                    href="/products"
                    className="block text-center text-blue-600 hover:text-blue-700 mt-2"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </main>
      <Footer />
    </div>
  );
} 