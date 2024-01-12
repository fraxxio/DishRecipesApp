import React from "react";
import "./loadingdetails.css";

export const LoadingDetails = () => {
  return (
    <div className='loading-card'>
      <div className='pic-loader'></div>
      <div className='text-sec'>
        <div className='heading-loader'></div>
        <div className='text-loader'></div>
        <div className='text-loader'></div>
        <div className='text-loader-short'></div>
        <div className='text-loader'></div>
        <div className='text-loader'></div>
        <div className='text-loader-short'></div>
      </div>
    </div>
  );
};
