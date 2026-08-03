import React from 'react';
import FoodMenu from './FoodMenu';

// Restaurant also does NOT need "user".
// It only forwards it down to FoodMenu.
export default function Restaurant({ user }) {
  return (
    <div>
      <h2 className="section-title">Restaurant</h2>
      <div className="prop-drilling-note">
        Restaurant received "user" as a prop but only forwards it to
        FoodMenu — it never reads it.
      </div>
      <FoodMenu user={user} />
    </div>
  );
}
