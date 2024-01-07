import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export default function DataContextProvider({ children }) {
  const [dishes, setDishes] = useState({});
  const [page, setPage] = useState(0);
  const [isDefaultPage, setIsDefaultPage] = useState(true);

  return (
    <DataContext.Provider value={{ dishes, setDishes, page, setPage, isDefaultPage, setIsDefaultPage }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error("DataContext must be used within DataContextProvider");
  }
  return context;
}
