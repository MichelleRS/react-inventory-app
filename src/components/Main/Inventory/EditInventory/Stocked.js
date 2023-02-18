import React, { useContext } from 'react';
import { StockedContext } from '../../../../context/StockedContext.js';

export default function Stocked() {
  // get inventory
  const { StockedInventory } = useContext(StockedContext);

  return (
    <>
      <h2>Stocked Inventory</h2>
      <section>
        <ul>
          {StockedInventory.map((item) => (
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
