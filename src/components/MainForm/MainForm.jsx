import React from "react";
import "./mainform.css";
import { useForm } from "react-hook-form";
import Tag from "../Tag/Tag";
import { Tags } from "../../data/tags";

const MainForm = () => {
  const form = useForm();
  const { register } = form;

  return (
    <section className='form-section'>
      <form>
        <h1>Search for dishes</h1>
        <input
          id='searchbar'
          className='form-searcbar'
          type='text'
          placeholder='Dish name or ingredient...'
          {...register("searchbar")}
        />

        {Tags.map((tag) => {
          return (
            <>
              <h2>{tag.name}:</h2>
              <div className='tags'>
                {tag.items.map((item) => {
                  return <Tag key={item.id} name={item.display_name} id={item.name} />;
                })}
              </div>
            </>
          );
        })}

        <input className='search-btn' type='submit' value='Search' />
      </form>
    </section>
  );
};

export default MainForm;
