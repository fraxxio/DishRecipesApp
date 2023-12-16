import React from "react";
import MainForm from "../components/MainForm/MainForm";
import DishCards from "../components/DishCards/DishCards";

const Home = () => {
  return (
    <main className='container'>
      <MainForm />
      <DishCards />
    </main>
  );
};

export default Home;
