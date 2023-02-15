import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../../context/UserContext.js';
import AddInventory from './AddInventory/AddInventory.js';

export default function Inventory() {
  // redirect to auth if not a user
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <main>
      <AddInventory />
      <h2>Edit Inventory</h2>
      {/* TODO: add path to EditInventory/ */}
    </main>
  );
}
