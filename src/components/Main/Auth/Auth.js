import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../../context/UserContext.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';

export default function Auth() {
  const { user } = useUser();

  // send users to Inventory/
  if (user) {
    return <Redirect to="/inventory" />;
  }

  return (
    <>
      <SignIn />
      <SignUp />
    </>
  );
}
