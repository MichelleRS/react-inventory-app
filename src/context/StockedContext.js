import { createContext, useEffect, useState } from 'react';
import { getStockedInventory } from '../services/inventory.js';

const StockedContext = createContext();

const StockedProvider = ({ children }) => {
  const [StockedInventory, setStockedInventory] = useState([]);

  // get stock inventory
  useEffect(() => {
    const fetchStockedInventory = async () => {
      try {
        const data = await getStockedInventory();
        setStockedInventory(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchStockedInventory();
  }, [StockedInventory]);

  return (
    <StockedContext.Provider value={{ StockedInventory, setStockedInventory }}>
      {children}
    </StockedContext.Provider>
  );
};

export { StockedContext, StockedProvider };
