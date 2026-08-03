import React from 'react';
import FoodMenu from './FoodMenu';

// Restaurant no longer receives or forwards "user".
export default function Restaurant({ cartCount, onAddToCart }) {
  return (
    <div>
      <FoodMenu cartCount={cartCount} onAddToCart={onAddToCart} />
    </div>
  );
}
