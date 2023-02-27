import React from 'react';
import LowStock from './LowStock.js';
import Stocked from './Stocked.js';
import '../Inventory.css';

export default function EditInventory() {
  return (
    <section className="inventoryFlexboxItem editInventoryContainer">
      <h2>Edit Inventory</h2>
      <div className="inventoryListsContainer">
        <LowStock />
        <Stocked />
      </div>
    </section>
  );
}
