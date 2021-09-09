import React from 'react';
import PropTypes from 'prop-types';

export function ResultInformationDay({ temperature, description, date }) {
  return (
    <li className='result-information__item'>
      <p className='result-information__date'>{date}</p>
      <p className='result-information__temperature'>{temperature}</p>
      <p className='result-information__description'>{description}</p>
    </li>
  );
}

ResultInformationDay.propTypes = {
  temperature: PropTypes.number,
  description: PropTypes.string,
  date: PropTypes.string,
};
