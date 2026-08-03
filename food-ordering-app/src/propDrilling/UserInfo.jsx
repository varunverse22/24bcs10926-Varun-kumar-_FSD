import React from 'react';

// UserInfo is the ONLY component that actually needs "user",
// yet it had to travel through Home, Restaurant, and FoodMenu
// as a prop to get here. This is the problem Context API solves.
export default function UserInfo({ user }) {
  return (
    <div>
      <h2 className="section-title">Customer Details</h2>
      <div className="user-info-card">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Location:</strong> {user.location}
        </p>
      </div>
    </div>
  );
}
