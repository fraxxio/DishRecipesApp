import React from "react";
import "./dishcards.css";
import Card from "../Card/Card";
import { PagesBtn } from "./PagesBtn";

const DishCards = ({ data, hasMore, title }) => {
  return (
    <section>
      <h1 className='grid-title'>{title}</h1>
      <div className='cards-section'>
        {data.map((dish) => {
          return <Card key={dish.id} dish={dish} />;
        })}
      </div>
      <PagesBtn hasMore={hasMore} />
    </section>
  );
};

export default DishCards;
