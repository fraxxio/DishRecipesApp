import React from "react";
import { useParams } from "react-router-dom";

const DishDetails = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default DishDetails;
