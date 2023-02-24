import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../../context/UserContext.js';
import { signUpUser } from '../../../services/auth.js';
import './Auth.css';

export default function SignUp() {
  // initialize state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useUser();

  // send users to Inventory/
  if (user) {
    return <Redirect to="/inventory" />;
  }

  // event listener for sign up form
  const submitSignUp = async (e) => {
    e.preventDefault();
    try {
      // sign up user
      const newUser = await signUpUser(email, password);
      setUser(newUser);
      // FIX: refresh page, TODO: refactor to update the state
      window.location.reload(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="authFlexboxItem authSignUp">
      <h3>Sign Up</h3>
      <form onSubmit={submitSignUp}>
        {/* email */}
        <div className="control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        {/* password */}
        <div className="control">
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
