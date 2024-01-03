import React from "react";

export const PagesBtn = ({ page, setPage, hasMore }) => {
  return (
    <div className='pages'>
      <button
        type='button'
        className='pages-btn'
        onClick={() => setPage((old) => old - 1)}
        disabled={page === 0}
      >
        Prev page
      </button>
      <p>{page + 1}</p>
      <button
        type='button'
        className='pages-btn'
        disabled={!hasMore}
        //disabled={page === 5}
        onClick={() => {
          if (hasMore) {
            setPage((old) => old + 1);
          }
        }}
      >
        Next page
      </button>
    </div>
  );
};
