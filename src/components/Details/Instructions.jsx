import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

export const Instructions = ({ data }) => {
  return (
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
  );
};
