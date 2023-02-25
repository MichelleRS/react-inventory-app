import React from 'react';
import { useStocked } from '../../../../context/StockedContext.js';
import { deleteItemRow, upsertLowStock } from '../../../../services/inventory.js';
import '../Inventory.css';
import styles from '../../../buttons.module.css';

export default function Stocked() {
  // get inventory
  const { StockedInventory, setStockedInventory } = useStocked();

  // change current stock value to false and update state of stocked inventory
  const handleStockedToggle = async (item) => {
    try {
      const toggledItem = await upsertLowStock(item);
      setStockedInventory((prevItems) =>
        prevItems.map((prevItem) => (prevItem.stocked === false ? toggledItem : prevItem))
      );
    } catch (error) {
      console.error(error.message);
    }
  };

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
              {/* button to change stock value */}
              <button
                type="button"
                className={styles.secondaryButton}
                value={item.stocked}
                name="current-stock"
                onClick={() => handleStockedToggle(item)}
              >
                Move to Low Stock
              </button>
              {/* button to delete item */}
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={() => handleDeleteItem(item.id)}
              >
                Delete Item
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
