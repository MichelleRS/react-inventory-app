import React, { useContext } from 'react';
import { StockedContext } from '../../../../context/StockedContext.js';

export default function Stocked() {
  // get inventory
  const { StockedInventory } = useContext(StockedContext);

  return (
    <>
      <h3>Stocked Inventory</h3>
      <section>
        <ul>
          {StockedInventory.map((item) => (
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
