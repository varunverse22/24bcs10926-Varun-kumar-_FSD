import React from 'react';
import Home from './Home';

// ---------------------------------------------------------------
// TASK 1: Demonstrating PROP DRILLING
// ---------------------------------------------------------------
// The logged-in customer's information lives here, at the top of
// the tree. To get it down to <UserInfo>, we must pass it through
// every intermediate component as a prop, even though Home,
// Restaurant, and FoodMenu never actually use the data themselves.
// This is "prop drilling".
// ---------------------------------------------------------------

const user = {
  name: 'Rahul Sharma',
  email: 'rahul@gmail.com',
  location: 'Chandigarh',
};

export default function AppPropDrilling() {
  return (
    <div>
      <div className="info-banner">
        <strong>Prop Drilling Demo:</strong> <code>user</code> is passed
        App → Home → Restaurant → FoodMenu → UserInfo. Open{' '}
        <code>src/propDrilling/*.jsx</code> to see every component
        forwarding the <code>user</code> prop it never uses.
      </div>
      <div className="container">
        {/* user is passed down starting here */}
        <Home user={user} />
      </div>
    </div>
  );
}
