import React from 'react';

export default function AddInventory() {
  return (
    <div>
      <h2>Add Item to Inventory</h2>
      {/* form */}
      <form>
        {/* input: name */}
        <div>
          <label>Name of item</label>
          <input type="text" />
        </div>

        {/* radio buttons: stocked, low stock */}
        <fieldset>
          <legend>Current stock</legend>
          {/* stocked */}
          <input type="radio" />
          <label>Stocked</label>
          {/* low stock */}
          <input type="radio" />
          <lable>Low stock</lable>
        </fieldset>

        {/* button: add item */}
        <div>
          <button type="submit">Add Item</button>
        </div>
      </form>
    </div>
  );
}
