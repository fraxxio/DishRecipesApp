import React from "react";
import MainForm from "../components/MainForm/MainForm";
import { useDataContext } from "../context/dataContext";
import { PagesBtn } from "../components/DishCards/PagesBtn";

const Search = () => {
  const { searchQuery } = useDataContext();

  return (
    <main className='container'>
      <MainForm />
      //todo DishCards component only receive required data to render
    </main>
  );
};

export default Search;
