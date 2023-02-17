import { createContext, useEffect, useState } from 'react';
import { getUserInventory } from '../services/inventory.js';

const InventoryContext = createContext();

const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);

  // get inventory list
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const data = await getUserInventory();
        setInventory(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchInventory();
  }, [inventory]);

  return (
    <InventoryContext.Provider value={{ inventory, setInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};

export { InventoryContext, InventoryProvider };
