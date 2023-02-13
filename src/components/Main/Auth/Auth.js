import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Auth() {
  // TODO: initialize state

  // TODO: send users to Inventory/

  // TODO: form submit function to send info to Supabase

  return (
    <div>
      <h2>Welcome!</h2>

      <nav>
        {/* sign in */}
        <NavLink to="/auth/sign-in">Sign in</NavLink>
        {/* sign up */}
        <NavLink to="/auth/sign-up">Sign up</NavLink>
      </nav>

      <form>
        {/* email fieldset */}
        <fieldset>
          <label>Email</label>
          <input type="email"></input>
        </fieldset>
        {/* password fieldset */}
        <fieldset>
          <label>Password</label>
          <input type="password"></input>
        </fieldset>
        {/* button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
