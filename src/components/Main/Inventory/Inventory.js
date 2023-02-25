import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../../context/UserContext.js';
import AddInventory from './AddInventory/AddInventory.js';
import EditInventory from './EditInventory/EditInventory.js';
import './Inventory.css';

export default function Inventory() {
  // redirect to auth if not a user
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <main className="inventoryFlexboxContainer">
      <AddInventory />
      <EditInventory />
    </main>
  );
}
