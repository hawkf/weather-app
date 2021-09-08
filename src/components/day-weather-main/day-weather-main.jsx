import React from 'react';
import { connect } from 'react-redux';
import LocationForm from '../location-form/location-form';
import { ResultInformationDay } from '../result-information-day/result-information-day';
import { fetchCoordinates, fetchWeekWeather } from '../../store/api-actions';
import { useEffect } from 'react';

export function DayWeatherMain({
  getCoordinates,
  setWeekWeather,
  locationName,
  coordinates,
}) {
  useEffect(() => {
    getCoordinates(locationName);
  }, [getCoordinates, locationName]);

  useEffect(() => {
    if (coordinates.lat !== null && coordinates.lon !== null) {
      setWeekWeather(coordinates);
    }
  }, [setWeekWeather, coordinates]);

  return (
    <main className='main-page'>
      <LocationForm />
      <section className='result-information'>
        <h2 className='result-information__title'>Nigeria, NG</h2>
        <ul className='result-information__list'>
          <ResultInformationDay />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(DayWeatherMain);
