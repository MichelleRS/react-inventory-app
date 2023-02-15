import React from 'react';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';

export default function Header() {
  const { user, setUser } = useUser();

  // sign out button
  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      <h1>Inventory App</h1>
      {user && (
        <nav>
          <p>
            <button type="button" onClick={handleSignOut}>
              Sign out
            </button>{' '}
            from {user.email}
          </p>
        </nav>
      )}
    </div>
  );
}
