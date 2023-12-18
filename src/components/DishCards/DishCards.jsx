import React from "react";
import "./dishcards.css";
import { useDataContext } from "../../context/dataContext";

const DishCards = () => {
  const { searchQuery } = useDataContext();

  return (
    <section className='cards-section'>
      <p>{JSON.stringify(searchQuery)}</p>
    </section>
  );
};

export default DishCards;
