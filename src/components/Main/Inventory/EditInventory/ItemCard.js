import React, { useContext } from 'react';
import { InventoryContext } from '../../../../context/InventoryContext.js';

export default function ItemCard() {
  const { inventory } = useContext(InventoryContext);

  return (
    <div>
      {/* begin rendering an item card using .map */}
      <>
        {inventory.map((item) => (
          <ul key={item.id}>
            <li>
              <h2>{item.name}</h2>
              {/* TODO: button to change stock value */}
              <button type="button">{String(item.stocked)}</button>
              {/* TODO: button to delete item*/}
              <button type="button">Delete Item</button>
            </li>
          </ul>
        ))}
      </>
    </div>
  );
}
