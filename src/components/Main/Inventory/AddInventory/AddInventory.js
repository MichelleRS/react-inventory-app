import React, { useContext, useState } from 'react';
import { InventoryContext } from '../../../../context/InventoryContext.js';
import { createItemRow } from '../../../../services/inventory.js';

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
    <div>
      <h2>Add Item to Inventory</h2>
      {/* form */}
      <form>
        {/* input: name */}
        <div>
          <label htmlFor="name">Name of item</label>
          <input
            type="text"
            name="name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        {/* radio buttons: stocked, low stock */}
        {/* TODO send stocked value to Supabase */}
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
          <label htmlFor="stocked">Stocked</label>
          {/* low stock */}
          <input
            type="radio"
            name="currentStock"
            id="lowStock"
            value={false}
            onChange={(e) => setStocked(e.target.value)}
          />
          <label htmlFor="lowStock">Low stock</label>
        </fieldset>

        {/* button: add item */}
        <div>
          <button type="submit" onClick={handleNewItem}>
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
