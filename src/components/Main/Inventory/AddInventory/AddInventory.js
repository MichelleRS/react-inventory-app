import React, { useContext, useState } from 'react';
import { InventoryContext } from '../../../../context/InventoryContext.js';
import { createItemRow } from '../../../../services/inventory.js';
import './AddInventory.css';
import styles from '../../../buttons.module.css';

export default function AddInventory() {
  // initialize state for name and stocked
  const [itemName, setItemName] = useState('');
  const [stocked, setStocked] = useState(true);

  // call setInventory from InventoryContext
  const { setInventory } = useContext(InventoryContext);

  // function to send user item input to Supabase
  const handleNewItem = async () => {
    try {
      const itemRow = await createItemRow(itemName, stocked);
      setInventory((prev) => [...prev, itemRow]);
      setItemName('');
      setStocked(true);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <section className="addInventoryContainer">
      {/* add inventory form */}
      <h2>Add to Inventory</h2>
      {/* form */}
      <form className="addInventoryForm">
        <div className="formInputs">
          {/* input: name */}
          <div className="nameInput">
            <label htmlFor="name">Name of item</label>
            <input
              type="text"
              name="name"
              className="itemInput"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          {/* radio buttons: stocked, low stock */}
          <div className="stockedValueInput">
            <fieldset>
              <legend>Current stock</legend>
              {/* stocked */}
              <input
                type="radio"
                name="currentStock"
                id="stocked"
                value={true}
                onChange={(e) => setStocked(e.target.value)}
              />
              <label htmlFor="stocked" className="radio">
                Stocked
              </label>
              {/* low stock */}
              <input
                type="radio"
                name="currentStock"
                id="lowStock"
                value={false}
                onChange={(e) => setStocked(e.target.value)}
              />
              <label htmlFor="lowStock" className="radio">
                Low stock
              </label>
            </fieldset>
          </div>
        </div>

        {/* button: add item */}
        <div className="formAddItem">
          <button type="submit" className={styles.primaryButton} onClick={handleNewItem}>
            Add Item
          </button>
        </div>
      </form>
    </section>
  );
}
