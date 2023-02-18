import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../../context/UserContext.js';
import { getLowStockInventory } from '../../../services/inventory.js';
import AddInventory from './AddInventory/AddInventory.js';
import EditInventory from './EditInventory/EditInventory.js';

export default function Inventory() {
  // redirect to auth if not a user
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  console.log('getLowStockInventory()', getLowStockInventory());

  return (
    <main>
      <AddInventory />
      <EditInventory />
    </main>
  );
}
