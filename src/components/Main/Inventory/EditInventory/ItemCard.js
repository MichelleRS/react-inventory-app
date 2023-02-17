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
            <li>{item.name}</li>
          </ul>
        ))}
      </>
    </div>
  );
}
