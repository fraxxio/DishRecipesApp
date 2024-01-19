import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { Tags } from "../../data/tags";
import { useDataContext } from "../../context/dataContext";
import { AutoComplete } from "../AutoComplete/AutoComplete";
import { Tabs } from "./Tabs";
import { TagsUI } from "./TagsUI";
import { ErrorLabel } from "./ErrorLabel";
import "./mainform.css";

const MainForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tags: "",
      searchbar: "",
    },
  });
  const tags = watch("tags");
  const [activeTab, setActiveTab] = useState(Tags[0].name);
  const { setIsDefaultPage, setParams, setPage } = useDataContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFocused, setIsFocused] = useState(false);

  function hFilterChange(filterKey, filterValue) {
    setSearchParams(
      (prevParams) => {
        if (filterValue === "delete") {
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
      },
      { replace: true }
    );
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
          autoComplete='off'
          placeholder='Dish name or ingredient...'
          onFocus={() => setIsFocused(true)}
          {...register("searchbar", {
            required: tags?.length === 0 ? true : false,
            maxLength: {
              value: 100,
              message: "Too Many Characters (Max 60)",
            },
            onBlur: () => setIsFocused(false),
          })}
        />

        <AutoComplete
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          setValue={setValue}
          control={control}
        />

        <ErrorLabel errors={errors} />

        <Tabs
          Tags={Tags}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          reset={reset}
          hFilterChange={hFilterChange}
        />

        <TagsUI
          Tags={Tags}
          activeTab={activeTab}
          hFilterChange={hFilterChange}
          register={register}
        />

        <button className='search-btn' type='submit'>
          <IoSearchSharp /> Search
        </button>
      </form>
    </section>
  );
};

export default MainForm;
