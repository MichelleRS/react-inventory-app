import React from 'react';
import LowStock from './LowStock.js';
import Stocked from './Stocked.js';
import '../Inventory.css';

export default function EditInventory() {
  return (
    <section className="inventoryFlexboxItem">
      <h2>View and Edit Inventory</h2>
      <LowStock />
      <Stocked />
    </section>
  );
}
