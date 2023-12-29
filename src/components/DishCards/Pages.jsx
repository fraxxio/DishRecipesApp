import React from "react";

export const Pages = ({ page, setPage }) => {
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
        // disabled={isPlaceholderData || !data?.hasMore}
        disabled={page === 5}
        onClick={() => {
          // if (!isPlaceholderData && data.hasMore) {
          setPage((old) => old + 1);
          // }
        }}
      >
        Next page
      </button>
    </div>
  );
};
