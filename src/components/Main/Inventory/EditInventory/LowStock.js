import React, { useContext } from 'react';
import { LowStockContext } from '../../../../context/LowStockContext.js';

export default function LowStock() {
  // get inventory
  const { lowStockInventory } = useContext(LowStockContext);

  return (
    <>
      <h2>Low Stock Inventory</h2>
      <section>
        <ul>
          {lowStockInventory.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              {/* TODO: button to change stock value */}
              <button type="button" value={item.stocked} name="current-stock">
                {String(item.stocked)}
              </button>
              {/* TODO: button to delete item*/}
              <button type="button">Delete Item</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
