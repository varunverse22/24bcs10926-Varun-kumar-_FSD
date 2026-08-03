import React, { useState, useEffect } from 'react';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Navbar';
import Home from './components/Home';

// Logged-in customer's information, stored once at the top level.
const user = {
  name: 'Rahul Sharma',
  email: 'rahul@gmail.com',
  location: 'Chandigarh',
};

// ---------------------------------------------------------------
// TASK 2: UserProvider wraps the app and supplies "user" via
// Context, so Home/Restaurant/FoodMenu no longer need to receive
// or forward it as a prop.
//
// TASK 4: cartCount state lives here and is updated whenever the
// customer clicks "Add to Cart" (handler passed down to FoodMenu).
//
// TASK 5: useEffect logs a message to the console every time
// cartCount changes, and only then, because cartCount is the only
// value in its dependency array.
// ---------------------------------------------------------------
export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log(`Cart updated. Total items: ${cartCount}`);
  }, [cartCount]);

  return (
    <UserProvider user={user}>
      <Navbar cartCount={cartCount} />
      <div className="container">
        <Home cartCount={cartCount} onAddToCart={handleAddToCart} />
      </div>
    </UserProvider>
  );
}
