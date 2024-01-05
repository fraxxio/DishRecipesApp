import React from "react";
import { LuClock4 } from "react-icons/lu";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ dish }) => {
  return (
    <div className='card'>
      <Link to={`/${dish.id}`}>
        <img src={dish.thumbnail_url} alt={dish.name} />
        <div className='card-info'>
          <h1 title={dish.name}>{dish.name}</h1>
          <p className='card-time'>
            <LuClock4 size={16} />
            {dish.total_time_minutes === null && dish.total_time_tier === null
              ? "Cook time unknown"
              : dish.total_time_tier?.display_tier || dish.total_time_minutes + " min"}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
