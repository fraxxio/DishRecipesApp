import React from "react";
import MainForm from "../components/MainForm/MainForm";
import DishCards from "../components/DishCards/DishCards";
import useFetchTrending from "../utils/API/useFetchTrending";
import useFetchSearchQuery from "../utils/API/useFetchSearchQuery";
import Loading from "../components/Loading/Loading";
import FetchError from "../components/FetchError/FetchError";
import { useDishesData } from "../hooks/useDishesData";
import { useDataContext } from "../context/dataContext";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, setPage, SetIsDefaultPage, isDefaultPage } = useDataContext();
  const fetchFunction = isDefaultPage ? useFetchTrending : useFetchSearchQuery;
  const qkey = isDefaultPage ? "dishes" : "searchdish" + searchParams;

  const { isLoading, data, isError, error, isFetching } = useDishesData(
    fetchFunction,
    page,
    searchParams,
    qkey
  );
  const Dishes = isDefaultPage
    ? data?.results.find((item) => item.category === "Trending").items || []
    : data?.results || [];

  //console.log(data);

  if (isLoading || isFetching) {
    return (
      <main className='container'>
        <MainForm />
        <section className='loadingerror-section'>
          <Loading />
        </section>
      </main>
    );
  }

  if (isError) {
    return (
      <main className='container'>
        <MainForm />
        <section className='loadingerror-section'>
          <FetchError msg={error.message} />
        </section>
      </main>
    );
  }

  if (data.count === 0) {
    return (
      <main className='container'>
        <MainForm />
        <h1>We couldn't find any results with this search query. Try something else.</h1>
      </main>
    );
  }

  return (
    <main className='container'>
      <MainForm />
      <DishCards
        data={Dishes}
        page={page}
        setPage={setPage}
        hasMore={searchParams.size > 0 ? data.count > 20 && data.results.length === 20 : Dishes.length > 20}
        title={
          searchParams.size > 0 ? `Search results (${data.count}):` : `Trending dishes (${Dishes.length}):`
        }
      />
    </main>
  );
};

export default Home;
