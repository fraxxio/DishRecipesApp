import React, { useState, useEffect } from "react";

export const Results = ({ data, maxValue, setValue }) => {
  const [selected, setSelected] = useState(0);

  //TODO implement scrolling of suggestions when selected item is out of bounds

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      setSelected((prevSelected) => Math.min(prevSelected + 1, maxValue - 1));
    } else if (event.key === "ArrowUp") {
      setSelected((prevSelected) => Math.max(prevSelected - 1, 0));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className='parent-cont' tabIndex={0}>
      {data.map((result, index) => {
        return (
          <div
            onClick={() => setValue("searchbar", result.display)}
            className={selected === index ? "select result" : "result"}
            key={result.display}
          >
            {result.display}
          </div>
        );
      })}
    </div>
  );
};
