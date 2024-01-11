import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Tags } from "../../data/tags";
import { useDataContext } from "../../context/dataContext";
import Tag from "../Tag/Tag";
import "./mainform.css";

const MainForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tags: "",
    },
  });
  const tags = watch("tags");
  const [activeTab, setActiveTab] = useState(Tags[0].name);
  const { setIsDefaultPage, setParams, setPage } = useDataContext();

  const [searchParams, setSearchParams] = useSearchParams();

  function hFilterChange(filterKey, filterValue) {
    setSearchParams((prevParams) => {
      if (filterValue === null) {
        prevParams.delete(filterKey);
        return prevParams;
      }

      if (prevParams.has(filterKey, filterValue) && filterKey !== "q") {
        prevParams.delete(filterKey, filterValue);
        return prevParams;
      }

      if (prevParams.has(filterKey) && filterKey !== "q") {
        prevParams.append(filterKey, filterValue);
        return prevParams;
      }

      prevParams.set(filterKey, filterValue);
      return prevParams;
    });
  }

  function onSumbit(data) {
    !searchParams.has("tags") && data.tags.length > 0 ? hFilterChange("tags", data.tags) : null;
    hFilterChange("q", data.searchbar);
    setSearchParams((prevParams) => {
      prevParams.delete("page");
      return prevParams;
    });
    setParams(searchParams);
    setIsDefaultPage(false);
    setPage(1);
  }

  return (
    <section className='form-section'>
      <form onSubmit={handleSubmit(onSumbit)}>
        <h1>Search for dishes</h1>
        <input
          id='searchbar'
          className='form-searcbar'
          type='search'
          placeholder='Dish name or ingredient...'
          {...register("searchbar", {
            required: tags?.length === 0 ? "Select some tags or type in searchbar" : false,
          })}
        />
        <ErrorMessage
          errors={errors}
          name='searchbar'
          render={({ message }) => <p className='form-error'>{message}</p>}
        />
        <div className='tabs'>
          {Tags.map((tag, index) => {
            return activeTab === tag.name ? (
              <button type='button' key={index} className='tab active-tab'>
                {tag.name}
              </button>
            ) : (
              <button
                type='button'
                className='tab'
                key={index}
                onClick={() => setActiveTab(tag.name)}
              >
                {tag.name}
              </button>
            );
          })}
          <button
            type='button'
            className='reset-btn'
            onClick={() => {
              reset({ tags: "" });
              hFilterChange("tag", null);
            }}
          >
            <IoMdRefresh /> Reset Filters
          </button>
        </div>
        {Tags.map((tag, index) => {
          return (
            <React.Fragment key={index}>
              {activeTab === tag.name ? (
                <div className='tags active-tags'>
                  {tag.items.map((item) => {
                    return (
                      <Tag
                        key={item.id}
                        displayName={item.display_name}
                        name={item.name}
                        register={register}
                        hFilterChange={hFilterChange}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className='tags'>
                  {tag.items.map((item) => {
                    return (
                      <Tag
                        key={item.id}
                        displayName={item.display_name}
                        name={item.name}
                        register={register}
                        hFilterChange={hFilterChange}
                      />
                    );
                  })}
                </div>
              )}
            </React.Fragment>
          );
        })}
        <button className='search-btn' type='submit'>
          <IoSearchSharp /> Search
        </button>
      </form>
    </section>
  );
};

export default MainForm;
