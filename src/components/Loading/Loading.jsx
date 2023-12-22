import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className='loading-row'>
      <div className='loader'></div>
      <div className='loader'></div>
      <div className='loader'></div>
      <div className='loader'></div>
    </div>
  );
};

export default Loading;
