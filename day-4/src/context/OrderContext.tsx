"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface Order {
  id: string;
  items: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }[];
  total: number;
  status: string;
  createdAt: string;
}

interface OrderContextProps {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: string) => void;
  getOrderById: (orderId: string) => Order | undefined;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: '1',
      items: [
        { productId: 'p1', name: 'Product 1', price: 100, quantity: 2, imageUrl: '' },
      ],
      total: 200,
      status: 'pending',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      items: [
        { productId: 'p2', name: 'Product 2', price: 50, quantity: 1, imageUrl: '' },
      ],
      total: 50,
      status: 'completed',
      createdAt: new Date().toISOString(),
    },
  ]);

  const addOrder = (order: Order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  const updateOrderStatus = (orderId: string, status: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  const getOrderById = (orderId: string) => {
    return orders.find((order) => order.id === orderId);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateOrderStatus, getOrderById }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrder must be used within OrderProvider");
  return context;
};
