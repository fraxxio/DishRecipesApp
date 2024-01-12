import React from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { LuClock4 } from "react-icons/lu";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import "./details.css";

export const Details = ({ data }) => {
  return (
    <div>
      <Link to='..' className='go-back'>
        <GoArrowLeft /> Go Back
      </Link>
      <div className='parent'>
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
        <div className='div2'>
          <p className='section-title'>Instructions:</p>
          {data.instructions.map((instruc) => {
            return (
              <div className='instruction' key={instruc.id}>
                <span className='position'>
                  {instruc.position} <TbArrowBadgeRightFilled />
                </span>
                {instruc.display_text}
              </div>
            );
          })}
        </div>
        <div className='div3'>
          {data.nutrition !== null && <p className='section-title'>Nutrition:</p>}
          {data.nutrition !== null &&
            Object.entries(data.nutrition).map(([key, value]) =>
              key.startsWith("updated") ? null : (
                <>
                  <div className='instruction' key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                  </div>
                </>
              )
            )}
          <div className='spacer'></div>
          {data.hasOwnProperty("tips_summary") ? (
            <>
              <p className='section-title'>Tips:</p>
              <div className='instruction'>
                {data.tips_summary.content.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className='section-title'>Credits:</p>
              {data.credits.map((person) => {
                return <div className='instruction'>{person.name}</div>;
              })}
            </>
          )}
          {console.log(data)}
        </div>
      </div>
    </div>
  );
};
