'use client';

import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/client/Header';
import Footer from '@/components/client/Footer';
import { useCart } from '@/context/CartContext';
import Toast, { ToastType } from '@/components/client/Toast';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { clearCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
  } | null>(null);

  const hasShownToast = useRef(false);

  useEffect(() => {
    const handleSuccess = async () => {
      if (!sessionId) {
        setError('No session ID found');
        setLoading(false);
        return;
      }

      if (hasShownToast.current) return;

      try {
        // Clear the cart after successful payment
        clearCart();
        
        // Check session status
        const res = await fetch(`/api/get-checkout-session?session_id=${sessionId}`);
        const data = await res.json();
        console.log(data);
        if (data.status === 500) {
          setError('Failed to process order');
        } else if (data.status === 400) {
          // Payment is still processing
          setToast({
            message: data.message,
            type: 'warning'
          });
          console.log(data.message);
        } else {
          console.log(data.message);
          // Payment successful
          setToast({
            message: data.message,
            type: 'success'
          });
        }
        hasShownToast.current = true;

      } catch (err) {
        console.error('Error processing order:', err);
        setError('Failed to process order');
        
      } finally {
        setLoading(false);
      }
    };
    handleSuccess();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Something went wrong
              </h1>
              <p className="text-gray-600 mb-8">{error}</p>
              <Link
                href="/cart"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Return to Cart
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
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thank you for your order!
            </h1>
            <p className="text-gray-600 mb-8">
              Your payment has been processed successfully. We'll send you an email
              with your order details and tracking information.
            </p>
            <div className="space-y-4">
              <Link
                href="/orders"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Order Status
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <div>
                <Link
                  href="/products"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
} 