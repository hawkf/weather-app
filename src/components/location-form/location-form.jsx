import React, { useState, useEffect } from 'react';
import { useDebounce } from '../../hooks/useDebaunse';
import { connect } from 'react-redux';
import { ActionGenerator } from '../../store/action';

const INPUT_DELAY = 2000;

export function LocationForm({ setLocation }) {
  const [locationName, setLocationName] = useState('');

  const onChangeHandler = (evt) => {
    setLocationName(evt.currentTarget.value);
  };

  const debaunsedInputValue = useDebounce(locationName, INPUT_DELAY);

  useEffect(() => {
    setLocation(debaunsedInputValue);
  }, [debaunsedInputValue, setLocation]);

  return (
    <form className='location-form'>
      <input
        value={locationName}
        onChange={(evt) => onChangeHandler(evt)}
        className='location-form__input'
        type='text'
        placeholder='Location name'
      />
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setLocation(location) {
    dispatch(ActionGenerator.setLocation(location));
  },
});

export default connect(null, mapDispatchToProps)(LocationForm);
