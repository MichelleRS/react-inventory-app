import React from 'react';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';
import './Header.css';
import styles from '../buttons.module.css';

export default function Header() {
  const { user, setUser } = useUser();

  // sign out button
  const handleSignOut = async () => {
    try {
      // sign out user
      await signOut();
      setUser(null);
      // FIX: refresh page, TODO: refactor to update the state
      window.location.reload(false);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <header>
      <h1>Inventory App</h1>
      {user && (
        <nav>
          <p>
            <button type="button" className={styles.tertiaryButton} onClick={handleSignOut}>
              Sign out
            </button>
          </p>
        </nav>
      )}
    </header>
  );
}
