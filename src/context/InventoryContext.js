import { createContext, useEffect, useState } from 'react';
import { getUserInventory } from '../services/inventory.js';
import { useUser } from './UserContext.js';

const InventoryContext = createContext();

const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);
  const { user } = useUser();

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
  }, [user]);

  return (
    <InventoryContext.Provider value={{ inventory, setInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};

export { InventoryContext, InventoryProvider };
