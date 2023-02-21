import React from 'react';
import { useStocked } from '../../../../context/StockedContext.js';
import { deleteItemRow } from '../../../../services/inventory.js';

export default function Stocked() {
  // get inventory
  const { StockedInventory, setStockedInventory } = useStocked();

  // delete item and update state of stocked inventory
  const handleDeleteItem = async (item) => {
    try {
      const deletedItem = await deleteItemRow(item);
      setStockedInventory((prevItems) =>
        prevItems.filter((prevItem) => prevItem.id !== deletedItem.id)
      );
    } catch (error) {
      console.error(error.message);
    }
  };

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
              <button type="button" onClick={() => handleDeleteItem(item.id)}>
                Delete Item
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
