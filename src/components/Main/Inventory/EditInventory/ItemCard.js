import React, { useContext } from 'react';
import { InventoryContext } from '../../../../context/InventoryContext.js';

export default function ItemCard() {
  const { inventory } = useContext(InventoryContext);

  // TODO: function to change stock value of item

  // TODO: function to delete item from inventory

  return (
    <div>
      {/* TODO: remove div wrapper, move .map to EditInventory for each based on stock value */}
      <>
        {inventory.map((item) => (
          <ul key={item.id}>
            <li>
              <h2>{item.name}</h2>
              {/* TODO: button to change stock value */}
              <button type="button" value={item.stocked} name="current-stock">
                {String(item.stocked)}
              </button>
              {/* TODO: button to delete item*/}
              <button type="button">Delete Item</button>
            </li>
          </ul>
        ))}
      </>
    </div>
  );
}
