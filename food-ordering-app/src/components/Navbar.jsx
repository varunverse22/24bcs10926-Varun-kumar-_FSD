import React from 'react';
import { useUser } from '../hooks/useUser';

// ---------------------------------------------------------------
// TASK 4 (display part): Navbar shows the cart count.
// Navbar gets the user via the useUser() custom hook (Context API),
// NOT via props - proving prop drilling is no longer needed here.
// cartCount is still passed as a prop from App since Navbar is a
// sibling of Home, not a descendant of FoodMenu.
// ---------------------------------------------------------------
export default function Navbar({ cartCount }) {
  const user = useUser();

  return (
    <div className="navbar">
      <h1>QUICK BITE - FOOD ORDERING APP</h1>
      <div className="navbar-info">
        <span>Welcome, {user.name}</span>
        <span>Location: {user.location}</span>
        <span className="cart-badge">Cart: {cartCount} items</span>
      </div>
    </div>
  );
}
