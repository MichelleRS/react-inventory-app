import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../../context/UserContext.js';
import { signInUser } from '../../../services/auth.js';
import './Auth.css';
import styles from '../../Main/forms.module.css';

export default function SignIn() {
  // initialize state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useUser();

  // send users to Inventory/
  if (user) {
    return <Redirect to="/inventory" />;
  }

  // event listener for sign in form
  const submitSignIn = async (e) => {
    e.preventDefault();
    try {
      // sign in user
      const newUser = await signInUser(email, password);
      setUser(newUser);
      // FIX: refresh page TODO: refactor to update the state
      window.location.reload(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="authFlexboxItem authSignIn">
      <h3>Sign In</h3>
      <form onSubmit={submitSignIn}>
        {/* email */}
        <div className={styles.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        {/* password */}
        <div className={styles.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        {/* button */}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
