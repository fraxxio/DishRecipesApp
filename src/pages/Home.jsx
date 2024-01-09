import React from "react";
import MainForm from "../components/MainForm/MainForm";
import DishCards from "../components/DishCards/DishCards";
import useFetchTrending from "../utils/API/useFetchTrending";
import useFetchSearchQuery from "../utils/API/useFetchSearchQuery";
import Loading from "../components/Loading/Loading";
import FetchError from "../components/FetchError/FetchError";
import { useDishesData } from "../hooks/useDishesData";
import { useDataContext } from "../context/dataContext";

const Home = () => {
  const { page, setPage, SetIsDefaultPage, isDefaultPage, params } = useDataContext();
  const fetchFunction = isDefaultPage ? useFetchTrending : useFetchSearchQuery;
  const qkey = isDefaultPage ? "trendingDishes" : "searchDish" + params;

  const { isLoading, data, isError, error, isFetching } = useDishesData(fetchFunction, page, params, qkey);

  const Dishes = isDefaultPage
    ? (data?.results || []).find((item) => item.category === "Trending")?.items || []
    : data?.results || [];

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
        hasMore={isDefaultPage ? Dishes.length > 20 : data.count > 20 && data.results.length === 20}
        title={isDefaultPage ? `Trending dishes (${Dishes.length}):` : `Search results (${data.count}):`}
      />
    </main>
  );
};

export default Home;
