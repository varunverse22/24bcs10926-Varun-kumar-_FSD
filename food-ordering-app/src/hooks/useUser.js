import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

// ---------------------------------------------------------------
// TASK 3: Custom hook
// ---------------------------------------------------------------
// useUser() hides the useContext(UserContext) call behind a small,
// reusable hook. Components call useUser() instead of importing
// useContext + UserContext directly.
// ---------------------------------------------------------------
export function useUser() {
  const user = useContext(UserContext);

  if (user === null) {
    throw new Error('useUser must be used within a <UserProvider>');
  }

  return user;
}
