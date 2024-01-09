import React from "react";
import { LuPlus } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import "./tag.css";

const Tag = ({ displayName, name, register, hFilterChange }) => {
  const [searchParams] = useSearchParams();
  return (
    <>
      <input
        type='checkbox'
        id={name}
        value={name}
        {...register("tags")}
        onClick={() => hFilterChange("tags", name)}
        checked={searchParams?.has("tags", name) || false}
      />

      <label htmlFor={name}>
        <LuPlus className='plus' /> <IoMdCheckmark className='check' /> {displayName}
      </label>
    </>
  );
};

export default Tag;
