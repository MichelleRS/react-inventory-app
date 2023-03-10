import React from 'react';
import { useLowStock } from '../../../../context/LowStockContext.js';
import { deleteItemRow, upsertStocked } from '../../../../services/inventory.js';
import '../Inventory.css';
import styles from '../../../buttons.module.css';

export default function LowStock() {
  // get inventory
  const { lowStockInventory, setLowStockInventory } = useLowStock();

  // change current stock value to true and update state of low stock inventory
  const handleStockedToggle = async (item) => {
    try {
      const toggledItem = await upsertStocked(item);
      setLowStockInventory((prevItems) =>
        prevItems.map((prevItem) => (prevItem.stocked === true ? toggledItem : prevItem))
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  // delete item and update state of low stock inventory
  const handleDeleteItem = async (item) => {
    try {
      const deletedItem = await deleteItemRow(item);
      setLowStockInventory((prevItems) =>
        prevItems.filter((prevItem) => prevItem.id !== deletedItem.id)
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="lowStockContainer">
      <h3>Low Stock Inventory</h3>
      <section>
        <ul>
          {lowStockInventory.map((item) => (
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
                Move to Stocked
              </button>
              {/* button to delete item */}
              <button
                type="button"
                className={styles.tertiaryButton}
                onClick={() => handleDeleteItem(item.id)}
              >
                Delete Item
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
