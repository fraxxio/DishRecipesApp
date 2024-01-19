import React from "react";

export const ErrorLabel = ({ errors }) => {
  return (
    <>
      {errors.searchbar && errors.searchbar.type === "required" && (
        <p className='form-error'>Select some tags or type in searchbar</p>
      )}
      {errors.searchbar && errors.searchbar.type === "maxLength" && (
        <p className='form-error'>Max length exceeded (Max 100)</p>
      )}
    </>
  );
};
