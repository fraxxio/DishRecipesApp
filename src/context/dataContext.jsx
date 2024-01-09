import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export default function DataContextProvider({ children }) {
  const searchParams = new URLSearchParams(window.location.search);
  const [params, setParams] = useState(searchParams);
  const [dishes, setDishes] = useState({});
  const [page, setPage] = useState(0);
  const [isDefaultPage, setIsDefaultPage] = useState(!(searchParams.has("tags") || searchParams.has("q")));

  return (
    <DataContext.Provider
      value={{ dishes, setDishes, page, setPage, isDefaultPage, setIsDefaultPage, params, setParams }}
    >
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
