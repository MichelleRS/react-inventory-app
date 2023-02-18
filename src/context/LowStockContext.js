import { createContext, useEffect, useState } from 'react';
import { getLowStockInventory } from '../services/inventory.js';

const LowStockContext = createContext();

const LowStockProvider = ({ children }) => {
  const [lowStockInventory, setLowStockInventory] = useState([]);

  // get low stock inventory
  useEffect(() => {
    const fetchLowStockInventory = async () => {
      try {
        const data = await getLowStockInventory();
        setLowStockInventory(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchLowStockInventory();
  }, [lowStockInventory]);

  return (
    <LowStockContext.Provider value={{ lowStockInventory, setLowStockInventory }}>
      {children}
    </LowStockContext.Provider>
  );
};

export { LowStockContext, LowStockProvider };
