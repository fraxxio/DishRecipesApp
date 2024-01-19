import React from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { TopInfo } from "./TopInfo";
import { Instructions } from "./Instructions";
import { AdditionalInfo } from "./AdditionalInfo";
import "./details.css";

export const Details = ({ data, state }) => {
  const path = state || "";
  return (
    <div>
      <Link to={`..${path}`} className='go-back'>
        <GoArrowLeft /> Go Back
      </Link>
      <div className='parent'>
        <TopInfo data={data} />
        <Instructions data={data} />
        <AdditionalInfo data={data} />
      </div>
    </div>
  );
};
