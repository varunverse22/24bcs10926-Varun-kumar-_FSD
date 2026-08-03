import React from 'react';
import { useUser } from '../hooks/useUser';

// ---------------------------------------------------------------
// TASK 3: UserInfo uses the useUser() custom hook instead of
// calling useContext(UserContext) directly, and instead of
// receiving "user" as a prop. No prop drilling required.
// ---------------------------------------------------------------
export default function UserInfo() {
  const user = useUser();

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
