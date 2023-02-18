import React from 'react';
import LowStock from './LowStock.js';
import Stocked from './Stocked.js';

export default function EditInventory() {
  return (
    <div>
      <h2>View and Edit Inventory</h2>
      <LowStock />
      <Stocked />
    </div>
  );
}
