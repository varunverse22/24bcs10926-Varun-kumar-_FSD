import React, { createContext } from 'react';

// ---------------------------------------------------------------
// TASK 2: Solve prop drilling using the Context API
// ---------------------------------------------------------------
// UserContext lets any nested component read the logged-in
// customer's information directly, without it being passed down
// as a prop through every intermediate component.
// ---------------------------------------------------------------

export const UserContext = createContext(null);

export function UserProvider({ user, children }) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
