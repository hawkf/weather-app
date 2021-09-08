import React from 'react';
import { connect } from 'react-redux';
import LocationForm from '../location-form/location-form';
import { ResultInformationDay } from '../result-information-day/result-information-day';
import { fetchCoordinates, fetchWeekWeather } from '../../store/api-actions';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import { ChangeButtons } from '../change-buttons/change-buttons';

export function DayWeatherMain({
  getCoordinates,
  setWeekWeather,
  locationName,
  coordinates,
  weekWeathers,
  isDataUpdated,
}) {
  useEffect(() => {
    if (locationName !== '' && !isDataUpdated) {
      getCoordinates(locationName);
    }
  }, [getCoordinates, locationName, isDataUpdated]);

  useEffect(() => {
    if (
      coordinates.lat !== null &&
      coordinates.lon !== null &&
      !isDataUpdated
    ) {
      setWeekWeather(coordinates);
    }
  }, [setWeekWeather, coordinates, isDataUpdated]);

  if (weekWeathers == null) {
    return (
      <main className='main-page'>
        <ChangeButtons isDay={true} />
        <LocationForm />
        <section className='result-information'></section>
      </main>
    );
  }

  return (
    <main className='main-page'>
      <ChangeButtons isDay={true} />
      <LocationForm />
      <section className='result-information'>
        <h2 className='result-information__title'>{locationName}</h2>
        <ul className='result-information__list'>
          <ResultInformationDay
            temperature={weekWeathers[0].temperature}
            description={weekWeathers[0].description}
            date={weekWeathers[0].date}
          />
        </ul>
      </section>
    </main>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getCoordinates(locationName) {
    dispatch(fetchCoordinates(locationName));
  },
  setWeekWeather(coordinates) {
    dispatch(fetchWeekWeather(coordinates));
  },
});

const mapStateToProps = (state) => ({
  locationName: state.location,
  coordinates: state.coordinates,
  weekWeathers: state.weekWeathers,
  isDataUpdated: state.isDataUpdated,
});

export default connect(mapStateToProps, mapDispatchToProps)(DayWeatherMain);
