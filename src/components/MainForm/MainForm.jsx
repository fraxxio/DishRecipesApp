import React, { useState } from "react";
import "./mainform.css";
import { useForm } from "react-hook-form";
import Tag from "../Tag/Tag";
import { Tags } from "../../data/tags";

const MainForm = () => {
  const form = useForm();
  const { register, handleSubmit } = form;
  const [activeTab, setActiveTab] = useState(Tags[0].name);

  function onSumbit(data) {
    console.log(data);
  }

  return (
    <section className='form-section'>
      <form onSubmit={handleSubmit(onSumbit)}>
        <h1>Search for dishes</h1>
        <input
          id='searchbar'
          className='form-searcbar'
          type='text'
          placeholder='Dish name or ingredient...'
          {...register("searchbar")}
        />

        <div className='tabs'>
          {Tags.map((tag, index) => {
            return activeTab === tag.name ? (
              <button type='button' key={index} className='tab active-tab'>
                {tag.name}
              </button>
            ) : (
              <button type='button' key={index} onClick={() => setActiveTab(tag.name)} className='tab'>
                {tag.name}
              </button>
            );
          })}
        </div>

        {Tags.map((tag, index) => {
          return (
            <React.Fragment key={index}>
              {activeTab === tag.name ? (
                <div className='tags active-tags'>
                  {tag.items.map((item) => {
                    return <Tag key={item.id} name={item.display_name} id={item.name} register={register} />;
                  })}
                </div>
              ) : (
                <div className='tags'>
                  {tag.items.map((item) => {
                    return <Tag key={item.id} name={item.display_name} id={item.name} register={register} />;
                  })}
                </div>
              )}
            </React.Fragment>
          );
        })}

        <input className='search-btn' type='submit' value='Search' />
      </form>
    </section>
  );
};

export default MainForm;
