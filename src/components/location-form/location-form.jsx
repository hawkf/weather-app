import React from "react";

export function LocationForm() {
  return (
    <form className='location-form'>
      <input
        className='location-form__input'
        type='text'
        placeholder='Location name'
      />
    </form>
  );
}
