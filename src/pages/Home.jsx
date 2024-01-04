import React from "react";
import MainForm from "../components/MainForm/MainForm";
import DishCards from "../components/DishCards/DishCards";
import useFetchTrending from "../utils/API/useFetchTrending";
import { useDishesData } from "../hooks/useDishesData";
import { useQueryClient } from "@tanstack/react-query";
import { useDataContext } from "../context/dataContext";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, setPage } = useDataContext();
  const queryClient = useQueryClient();

  const { isLoading, data, isError, error, isPlaceholderData } = useDishesData(useFetchTrending, page);
  const trendingDishes = data?.results.find((item) => item.category === "Trending") || [];

  //console.log(searchParams.getAll("tag"));
  return (
    <main className='container'>
      <MainForm />
      <DishCards
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={trendingDishes.items}
        page={page}
        setPage={setPage}
        hasMore={data?.hasMore || false}
      />
    </main>
  );
};

export default Home;
