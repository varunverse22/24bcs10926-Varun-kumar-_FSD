import React from 'react';
import Restaurant from './Restaurant';

// Home no longer receives or forwards "user" at all.
// It only needs to pass down cart-related props/handlers.
export default function Home({ cartCount, onAddToCart }) {
  return (
    <div>
      <Restaurant cartCount={cartCount} onAddToCart={onAddToCart} />
    </div>
  );
}
