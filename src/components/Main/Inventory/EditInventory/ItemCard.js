import React, { useContext } from 'react';
import { InventoryContext } from '../../../../context/InventoryContext.js';

export default function ItemCard() {
  const { inventory } = useContext(InventoryContext);

  // TODO: function to change stock value of item

  // TODO: function to delete item from inventory

  return (
    <>
      {/* TODO: remove div wrapper, move .map to EditInventory for each based on stock value */}
      {/* TODO remove ul from map and use in LowStock and Stocked */}
      <ul>
        {inventory.map((item) => (
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
    </>
  );
}
