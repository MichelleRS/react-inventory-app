import React, { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useUser } from '../../../context/UserContext.js';
import { authUser } from '../../../services/auth.js';

export default function Auth() {
  // initialize state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { type } = useParams();
  const { user, setUser } = useUser();

  // TODO: send users to Inventory/
  if (user) {
    return <Redirect to="/inventory" />;
  }

  // form submit function to send info to Supabase
  const submitAuth = async (e) => {
    e.preventDefault();
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2>Welcome!</h2>

      <nav>
        {/* sign in */}
        <NavLink to="/auth/sign-in">Sign in</NavLink>
        {/* sign up */}
        <NavLink to="/auth/sign-up">Sign up</NavLink>
      </nav>

      <form onSubmit={submitAuth}>
        {/* email fieldset */}
        <fieldset>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </fieldset>
        {/* password fieldset */}
        <fieldset>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </fieldset>
        {/* button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
