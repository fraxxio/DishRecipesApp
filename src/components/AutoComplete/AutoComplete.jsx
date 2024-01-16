import React from "react";
import "./autocomplete.css";
import { useWatch } from "react-hook-form";
import { useDebounce } from "../../hooks/useDebounce";
import { Results } from "./Results";
import { useDishesData } from "../../hooks/useDishesData";
import useFetchAutoComp from "../../utils/API/useFetchAutoComp";

export const AutoComplete = ({ control, isFocused, setValue }) => {
  const searchQuery = useWatch({
    control,
    name: "searchbar",
  });
  const debouncedQuery = useDebounce(searchQuery);
  const { isLoading, data, isError, isFetching } = useDishesData(
    useFetchAutoComp,
    debouncedQuery,
    "AutoComp"
  );
  if (data === "" || data === undefined) return;
  const results = data.results;

  return (
    <div
      style={results.length > 0 && isFocused ? { display: "block" } : { display: "none" }}
      className='autocomp-box'
    >
      {isLoading || isFetching ? (
        <p>Loading...</p>
      ) : (
        <Results setValue={setValue} data={results} maxValue={data.results.length} />
      )}
    </div>
  );
};
