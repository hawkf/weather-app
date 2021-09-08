import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../utils/const';

export function ChangeButtons({ isDay }) {
  const history = useHistory();

  const onDayButtonHandler = () => {
    history.push(AppRoute.ROOT);
  };

  const onWeekButtonHandler = () => {
    history.push(AppRoute.WEEK);
  };
  return (
    <div className='change-buttons'>
      <button
        class={`change-buttons__item ${
          isDay ? `change-buttons__item--active` : ''
        }`}
        onClick={onDayButtonHandler}
      >
        Day
      </button>
      <button
        class={`change-buttons__item ${
          !isDay ? `change-buttons__item--active` : ''
        }`}
        onClick={onWeekButtonHandler}
      >
        Week
      </button>
    </div>
  );
}
