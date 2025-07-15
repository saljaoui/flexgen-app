import React, { createContext, useContext, useState } from 'react';

// Initial default values
const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [layoutMode, setLayoutMode] = useState('flex');
  const [itemCount, setItemCount] = useState(4);

  const [flexSettings, setFlexSettings] = useState({
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '10px',
  });

  const [gridSettings, setGridSettings] = useState({
    columns: 3,
    rows: 2,
    gap: '10px',
  });

  // Context value exposed to children
  const contextValue = {
    layoutMode,
    setLayoutMode,
    itemCount,
    setItemCount,
    flexSettings,
    setFlexSettings,
    gridSettings,
    setGridSettings,
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};

// Custom hook for cleaner usage
export const useLayout = () => useContext(LayoutContext);
