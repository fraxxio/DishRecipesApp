import React from "react";
import useFetchDishDetails from "../utils/API/useFetchDishDetails";
import { LoadingDetails } from "../components/LoadingDetails/LoadingDetails";
import FetchError from "../components/FetchError/FetchError";
import { useParams } from "react-router-dom";
import { useDishesData } from "../hooks/useDishesData";

const DishDetails = () => {
  const { id } = useParams();
  const params = id;
  const { isLoading, data, isError, error, isFetching } = useDishesData(
    useFetchDishDetails,
    params,
    "DishDetails"
  );

  console.log(data);

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
    <>
      <img
        style={{ width: 500 + "px", height: 500 + "px" }}
        src={data.thumbnail_url}
        alt={data.name}
      />
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </>
  );
};

export default DishDetails;
