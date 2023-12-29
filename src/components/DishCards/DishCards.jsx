import React, { useState } from "react";
import "./dishcards.css";
import { useDataContext } from "../../context/dataContext";
import { useQueryClient } from "@tanstack/react-query";
import { useDishesData } from "../../hooks/useDishesData";
import Loading from "../Loading/Loading";
import FetchError from "../FetchError/FetchError";
import useFetchTrending from "../../utils/API/useFetchTrending";
import Card from "../Card/Card";
import { Pages } from "./Pages";

const DishCards = () => {
  const [page, setPage] = useState(0);
  const { searchQuery } = useDataContext();
  const queryClient = useQueryClient();

  const { isLoading, data, isError, error, isPlaceholderData } = useDishesData(useFetchTrending, page);

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

  //Rendering search results

  if (Object.keys(searchQuery).length !== 0) {
    return (
      <section className='cards-section'>
        <h1>Hello {searchQuery.searchbar}</h1>
        <Pages page={page} setPage={setPage} />
      </section>
    );
  }

  // Rendering trending dishes

  const trendingDishes = data.results.find((item) => item.category === "Trending");

  return (
    <section>
      <h1 className='grid-title'>Trending Dishes</h1>
      <div className='cards-section'>
        {trendingDishes.items.map((dish) => {
          return <Card key={dish.id} dish={dish} />;
        })}
      </div>
    </section>
  );
};

export default DishCards;
