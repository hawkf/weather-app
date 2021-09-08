import { ActionGenerator } from './action';
import { AppiRoute, API_KEY } from '../utils/const';

export const fetchCoordinates =
  (locationName) => (dispatch, _getState, api) => {
    api
      .get(AppiRoute.WEATHER, {
        params: {
          q: locationName,
          appid: API_KEY,
        },
      })
      .then(({ data }) =>
        dispatch(
          ActionGenerator.setCoordinates({
            lat: data.coord.lon,
            lon: data.coord.lon,
          })
        )
      );
  };

export const fetchWeekWeather =
  ({ lat, lon }) =>
  (dispatch, _getState, api) => {
    api
      .get(AppiRoute.WEEK_WEATHER, {
        params: {
          lat: lat,
          lon: lon,
          exclude: 'hourly,minutely',
          appid: API_KEY,
        },
      })
      .then(({ data }) => {
        dispatch(ActionGenerator.setWeekWeathers(data.daily.slice()));
      });
  };
