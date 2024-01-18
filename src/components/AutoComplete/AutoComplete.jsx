import React from "react";
import "./autocomplete.css";
import { useWatch } from "react-hook-form";
import { useDebounce } from "../../hooks/useDebounce";
import { useDishesData } from "../../hooks/useDishesData";
import useFetchAutoComp from "../../utils/API/useFetchAutoComp";

export const AutoComplete = ({ control, setValue, isFocused, setIsFocused }) => {
  const searchQuery = useWatch({
    control,
    name: "searchbar",
  });
  const debouncedQuery = useDebounce(searchQuery);
  const { isLoading, data, isFetching } = useDishesData(
    useFetchAutoComp,
    debouncedQuery,
    "AutoComp"
  );
  if (data === "" || data === undefined) return;
  const results = data.results;

  return (
    <div
      className='autocomp-box'
      style={{
        visibility: results.length > 0 && isFocused ? "visible" : "hidden",
        opacity: results.length > 0 && isFocused ? 1 : 0,
        transition: "visibility 0s, opacity 0.2s linear",
        //We need to set visibility to none because the onClick is not getting called
      }}
    >
      {isLoading || isFetching ? (
        <p>Loading...</p>
      ) : (
        <>
          {results.map((result) => (
            <div
              className='result'
              onClick={() => {
                setValue("searchbar", result.display);
                setIsFocused(false);
              }}
              key={result.display}
            >
              {result.display}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

// const [selected, setSelected] = useState(0);

// TODO implement scrolling of suggestions when selected item is out of bounds

// const handleKeyDown = (event) => {
//   if (event.key === "ArrowDown") {
//     setSelected((prevSelected) => Math.min(prevSelected + 1, maxValue - 1));
//   } else if (event.key === "ArrowUp") {
//     setSelected((prevSelected) => Math.max(prevSelected - 1, 0));
//   }
// };

// useEffect(() => {
//   document.addEventListener("keydown", handleKeyDown);
//   return () => {
//     document.removeEventListener("keydown", handleKeyDown);
//   };
// }, []);
