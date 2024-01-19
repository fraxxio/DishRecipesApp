import React from "react";
import { IoMdRefresh } from "react-icons/io";

export const Tabs = ({ Tags, activeTab, setActiveTab, reset, hFilterChange }) => {
  return (
    <div className='tabs'>
      {Tags.map((tag, index) => {
        return activeTab === tag.name ? (
          <button type='button' key={index} className='tab active-tab'>
            {tag.name}
          </button>
        ) : (
          <button type='button' className='tab' key={index} onClick={() => setActiveTab(tag.name)}>
            {tag.name}
          </button>
        );
      })}
      <button
        type='button'
        className='reset-btn'
        onClick={() => {
          reset({ tags: "" });
          hFilterChange("tags", "delete");
        }}
      >
        <IoMdRefresh /> Reset Filters
      </button>
    </div>
  );
};
