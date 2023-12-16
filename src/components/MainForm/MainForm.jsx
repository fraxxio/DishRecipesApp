import React from "react";
import "./mainform.css";
import { useForm } from "react-hook-form";

const MainForm = () => {
  const form = useForm();
  const { register } = form;

  return (
    <section className='form-section'>
      <form>
        <label htmlFor=''>Search for dishes:</label>
        <input id='searchbar' type='text' {...register("searchbar")} />

        <input type='submit' value='Search' />
      </form>
    </section>
  );
};

export default MainForm;
