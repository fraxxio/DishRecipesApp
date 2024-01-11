import { useDataContext } from "../../context/dataContext";
import { useSearchParams } from "react-router-dom";
import React from "react";

export const PagesBtn = ({ hasMore }) => {
  const { page, setPage } = useDataContext();
  const [searchParams, setSearchParams] = useSearchParams();

  function hPageChangeInUrl(pageValue) {
    setSearchParams((prevParams) => {
      if (pageValue === null || pageValue === 1) {
        prevParams.delete("page");
        return prevParams;
      }

      prevParams.set("page", pageValue);
      return prevParams;
    });
  }

  return (
    <div className='pages'>
      <button
        type='button'
        className='pages-btn'
        onClick={() => {
          hPageChangeInUrl(page - 1);
          setPage((oldPage) => oldPage - 1);
        }}
        disabled={page === 1}
      >
        Prev page
      </button>
      <p>{page}</p>
      <button
        type='button'
        className='pages-btn'
        disabled={!hasMore}
        onClick={() => {
          hPageChangeInUrl(page + 1);
          setPage((oldPage) => oldPage + 1);
        }}
      >
        Next page
      </button>
    </div>
  );
};
