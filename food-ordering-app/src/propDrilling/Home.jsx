import React from 'react';
import Restaurant from './Restaurant';

// Home does NOT need "user" itself.
// It only receives it so it can forward it to Restaurant.
export default function Home({ user }) {
  return (
    <div>
      <h2 className="section-title">Home</h2>
      <div className="prop-drilling-note">
        Home received "user" as a prop but only forwards it to
        Restaurant — it never reads it.
      </div>
      <Restaurant user={user} />
    </div>
  );
}
