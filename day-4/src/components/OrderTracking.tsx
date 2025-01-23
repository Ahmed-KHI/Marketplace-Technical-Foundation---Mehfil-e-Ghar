"use client";

import React, { useState } from "react";
import { useOrder } from "@/context/OrderContext";

const OrderTracking = () => {
  const { getOrderById } = useOrder();
  const [trackingId, setTrackingId] = useState("");
  interface Order {
    id: string;
    status: string;
    total: number;
    items: { productId: string; name: string; price: number; quantity: number }[];
  }

  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState("");

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tracking ID submitted:", trackingId);
    const foundOrder = getOrderById(trackingId);
    if (foundOrder) {
      console.log("Order found:", foundOrder);
      setOrder(foundOrder);
      setError("");
    } else {
      console.log("Order not found");
      setOrder(null);
      setError("Order not found.");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Order Tracking</h1>
      <form onSubmit={handleTrackOrder} className="mb-4">
        <input
          type="text"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          placeholder="Enter Tracking ID"
          className="border p-2 mr-2"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Track Order
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {order && (
        <div className="bg-transparent shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold">Order ID: {order.id}</h2>
          <p>Status: {order.status}</p>
          <p>Total: Rs. {order.total}</p>
          <h3 className="text-lg font-semibold mt-4">Items:</h3>
          <ul>
            {order.items.map((item: { productId: string; name: string; price: number; quantity: number }) => (
              <li key={item.productId}>
                {item.name} - Rs. {item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
