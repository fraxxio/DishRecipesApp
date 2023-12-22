import React from "react";
import "./dishcards.css";
import { useDataContext } from "../../context/dataContext";
import { useQueryClient } from "@tanstack/react-query";
import { useDishesData } from "../../hooks/useDishesData";
import Loading from "../Loading/Loading";
import FetchError from "../FetchError/FetchError";
import useFetchTrending from "../../utils/API/useFetchTrending";

const DishCards = () => {
  const { searchQuery } = useDataContext();
  const queryClient = useQueryClient();

  const { isLoading, data, isError, error } = useDishesData(useFetchTrending);

  if (isLoading) {
    return (
      <section className='cards-section'>
        <Loading />
      </section>
    );
  }

  if (isError) {
    return (
      <section className='cards-section'>
        <FetchError msg={error.message} />
      </section>
    );
  }

  return (
    <section className='cards-section'>
      {Object.entries(data).map((dish) => {
        return <p key={dish[1].id}>{dish[1].name}</p>;
      })}
    </section>
  );
};

export default DishCards;
