import React, { useContext } from 'react';
import { LowStockContext } from '../../../../context/LowStockContext.js';

export default function LowStock() {
  // get inventory
  const { lowStockInventory } = useContext(LowStockContext);

  return (
    <>
      <h3>Low Stock Inventory</h3>
      <section>
        <ul>
          {lowStockInventory.map((item) => (
            <li key={item.id}>
              <h4>{item.name}</h4>
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
