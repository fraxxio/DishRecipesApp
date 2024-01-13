import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main style={{ alignItems: "center" }}>
      <img style={{ width: 15 + "rem" }} src='./src/assets/404.svg' alt='Error' />
      <h1>Unfortunately, page that you are looking for doesn't exist...</h1>
      <Link style={{ fontSize: 1.5 + "rem" }} to='/'>
        Go back to the main page
      </Link>
    </main>
  );
};

export default Error;
