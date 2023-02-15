import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../../context/UserContext.js';
import { signInUser, signUpUser } from '../../../services/auth.js';

export default function Auth() {
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
      const newUser = await signInUser(email, password);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  // event listener for sign up form
  const submitSignUp = async (e) => {
    e.preventDefault();
    try {
      const newUser = await signUpUser(email, password);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2>Welcome!</h2>

      {/* form: sign in */}
      <section>
        <h3>Sign In</h3>
        <form onSubmit={submitSignIn}>
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
      </section>

      {/* form: sign up */}
      <section>
        <h3>Sign Up</h3>
        <form onSubmit={submitSignUp}>
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
      </section>
    </div>
  );
}
