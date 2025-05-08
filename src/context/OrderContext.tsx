'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Toast, { ToastType } from '@/components/client/Toast';

interface Order {
  id: string;
  status: 'processing' | 'completed' | 'failed';
  amount: number;
  date: string;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
  showToast: (message: string, type: ToastType) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    // Load orders from localStorage
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  useEffect(() => {
    // Save orders to localStorage whenever they change
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order: Order) => {
    setOrders((currentOrders) => [...currentOrders, order]);
  };

  const showToast = (message: string, type: ToastType) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((currentToasts) => [...currentToasts, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, showToast }}>
      {children}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
} 