import React from "react";
import "./fetcherror.css";

const FetchError = ({ msg }) => {
  return (
    <div className='error-box'>
      <img className='error-img' src='/src/assets/sad.svg' />
      <h2>FETCH ERORR: {msg}</h2>
    </div>
  );
};

export default FetchError;
