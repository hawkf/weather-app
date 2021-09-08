import React, { useEffect } from 'react';
import LocationForm from '../location-form/location-form';
import { ResultInformationDay } from '../result-information-day/result-information-day';
import { connect } from 'react-redux';
import { fetchCoordinates, fetchWeekWeather } from '../../store/api-actions';
import { ChangeButtons } from '../change-buttons/change-buttons';
import { ActionGenerator } from '../../store/action';

export function WeekWeatherMain({
  getCoordinates,
  setWeekWeather,
  locationName,
  coordinates,
  weekWeathers,
  isDataUpdated,
  isLocationCorrect,
}) {
  useEffect(() => {
    if (!isDataUpdated && locationName !== '') {
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
        <ChangeButtons isDay={false} />
        <LocationForm />
        <section className='result-information'>
          {!isLocationCorrect && <p>Location not found</p>}
        </section>
      </main>
    );
  }

  return (
    <main className='main-page'>
      <ChangeButtons isDay={false} />
      <LocationForm />
      <section className='result-information'>
        <h2 className='result-information__title'>{locationName}</h2>
        <ul className='result-information__list'>
          {weekWeathers.map((item, index) => {
            return (
              <ResultInformationDay
                key={index}
                temperature={item.temperature}
                description={item.description}
                date={item.date}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getCoordinates(locationName) {
    dispatch(ActionGenerator.setCoordinates({ lat: null, lon: null }));
    dispatch(ActionGenerator.setWeekWeathers(null));
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
  isLocationCorrect: state.isLocationCorrect,
});

export default connect(mapStateToProps, mapDispatchToProps)(WeekWeatherMain);
