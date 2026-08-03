import React from 'react';
import UserInfo from './UserInfo';

const foodItems = [
  { id: 1, name: 'Pizza', price: 299 },
  { id: 2, name: 'Burger', price: 149 },
  { id: 3, name: 'Pasta', price: 199 },
];

// ---------------------------------------------------------------
// TASK 4: Shopping cart
// ---------------------------------------------------------------
// FoodMenu still does not need "user" - and thanks to Context it
// no longer receives it as a prop at all. It does receive
// cartCount/onAddToCart from App via Home -> Restaurant, since
// that is genuine cart-related data these components care about
// passing along (not customer profile data).
// ---------------------------------------------------------------
export default function FoodMenu({ cartCount, onAddToCart }) {
  return (
    <div>
      <h2 className="section-title">Food Menu</h2>

      {foodItems.map((item) => (
        <div className="food-item" key={item.id}>
          <span>
            <span className="food-name">{item.name}</span>
            <span className="food-price">₹{item.price}</span>
          </span>
          <button className="add-btn" onClick={onAddToCart}>
            Add to Cart
          </button>
        </div>
      ))}

      <UserInfo />
    </div>
  );
}
