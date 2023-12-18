import React from "react";
import { LuPlus } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";
import "./tag.css";

const Tag = ({ displayName, name, register }) => {
  return (
    <>
      <input type='checkbox' id={name} value={name} {...register("tags")} />
      <label htmlFor={name}>
        <LuPlus className='plus' /> <IoMdCheckmark className='check' /> {displayName}
      </label>
    </>
  );
};

export default Tag;
