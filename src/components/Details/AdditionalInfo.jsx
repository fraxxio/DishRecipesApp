import React from "react";

export const AdditionalInfo = ({ data }) => {
  return (
    <div className='div3'>
      {data.nutrition !== null && Object.keys(data.nutrition).length !== 0 ? (
        <>
          <p className='section-title'>Nutrition:</p>
          {Object.entries(data.nutrition).map(([key, value]) =>
            key.startsWith("updated") ? null : (
              <div className='instruction' key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
              </div>
            )
          )}
        </>
      ) : null}

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
            return (
              <div key={person.name} className='instruction'>
                {person.name}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
