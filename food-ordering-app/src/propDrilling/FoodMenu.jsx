import React from 'react';
import UserInfo from './UserInfo';

const foodItems = [
  { id: 1, name: 'Pizza', price: 299 },
  { id: 2, name: 'Burger', price: 149 },
  { id: 3, name: 'Pasta', price: 199 },
];

// FoodMenu also does NOT need "user" for its own logic.
// It only forwards it down to UserInfo, the component that
// actually needs the data.
export default function FoodMenu({ user }) {
  return (
    <div>
      <h2 className="section-title">Food Menu</h2>
      <div className="prop-drilling-note">
        FoodMenu received "user" as a prop but only forwards it to
        UserInfo — it never reads it.
      </div>

      {foodItems.map((item) => (
        <div className="food-item" key={item.id}>
          <span>
            <span className="food-name">{item.name}</span>
            <span className="food-price">₹{item.price}</span>
          </span>
          <button className="add-btn" disabled title="Cart is not wired up in this demo">
            Add to Cart
          </button>
        </div>
      ))}

      <UserInfo user={user} />
    </div>
  );
}
