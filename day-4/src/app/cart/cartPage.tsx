// Rename this file to avoid conflict with the wishlist page
// Suggested new filepath: /e:/Work/New folder/marketplace-builder-hackathon-2025-day-4/src/app/cart/cartPage.tsx

import React from 'react';
import { useCart } from '@/context/CartContext';

const CartPage: React.FC = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.map((product) => (
          <li key={product._id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>£ {product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
