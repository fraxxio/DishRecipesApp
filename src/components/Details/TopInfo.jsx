import React from "react";
import { LuClock4 } from "react-icons/lu";

export const TopInfo = ({ data }) => {
  return (
    <div className='div1'>
      <img src={data.thumbnail_url} alt={data.name} />
      <div className='dish-text'>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <div className='separator'></div>
        <div className='cook-time'>
          <LuClock4 size={24} /> Cooking time:{"  "}
          {data.total_time_minutes === null && data.total_time_tier === null
            ? "Cook time unknown"
            : data.total_time_tier?.display_tier || data.total_time_minutes + " min"}
        </div>
        <div className='separator'></div>
        <div className='dish-details-tags'>
          {data.tags.slice(0, 30).map((tag) => {
            return (
              <div key={tag.id} className='dish-details-tag'>
                {tag.display_name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
