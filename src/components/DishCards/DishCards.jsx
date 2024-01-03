import React, { useState } from "react";
import "./dishcards.css";
import Loading from "../Loading/Loading";
import FetchError from "../FetchError/FetchError";
import Card from "../Card/Card";
import { PagesBtn } from "./PagesBtn";

const DishCards = ({ isLoading, isError, error, data, setPage, page, hasMore }) => {
  if (isLoading) {
    return (
      <section className='loadingerror-section'>
        <Loading />
      </section>
    );
  }

  if (isError) {
    return (
      <section className='loadingerror-section'>
        <FetchError msg={error.message} />
      </section>
    );
  }

  return (
    <section>
      <h1 className='grid-title'>Trending Dishes</h1>
      <div className='cards-section'>
        {data.map((dish) => {
          return <Card key={dish.id} dish={dish} />;
        })}
      </div>
      <PagesBtn page={page} setPage={setPage} hasMore={hasMore} />
    </section>
  );
};

export default DishCards;
