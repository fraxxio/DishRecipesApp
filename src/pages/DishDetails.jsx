import React from "react";
import useFetchDishDetails from "../utils/API/useFetchDishDetails";
import { LoadingDetails } from "../components/LoadingDetails/LoadingDetails";
import FetchError from "../components/FetchError/FetchError";
import { useParams } from "react-router-dom";
import { useDishesData } from "../hooks/useDishesData";
import { Details } from "../components/Details/Details";

const DishDetails = () => {
  const { id } = useParams();
  const params = id;
  const { isLoading, data, isError, error, isFetching } = useDishesData(
    useFetchDishDetails,
    params,
    "DishDetails"
  );

  if (isLoading || isFetching) {
    return (
      <main className='container'>
        <section className='loadingerror-section'>
          <LoadingDetails />
        </section>
      </main>
    );
  }

  if (isError) {
    return (
      <main className='container'>
        <section className='loadingerror-section'>
          <FetchError msg={error.message} />
        </section>
      </main>
    );
  }

  return (
    <main className='container'>
      <Details data={data} />
    </main>
  );
};

export default DishDetails;
