import React from "react";
import { LuPlus } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";
import "./tag.css";

const Tag = ({ name, id, register }) => {
  return (
    <>
      <input type='checkbox' id={id} value={name} {...register("tags")} />
      <label htmlFor={id}>
        <LuPlus className='plus' /> <IoMdCheckmark className='check' /> {name}
      </label>
    </>
  );
};

export default Tag;
