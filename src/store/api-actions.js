import { ActionGenerator } from './action';
import { AppiRoute, API_KEY } from '../utils/const';
import { weekWeatherAdapter } from '../utils/utils';

export const fetchCoordinates =
  (locationName) => (dispatch, _getState, api) => {
    api
      .get(AppiRoute.WEATHER, {
        params: {
          q: locationName,
          appid: API_KEY,
        },
      })
      .then(({ data }) => {
        dispatch(
          ActionGenerator.setCoordinates({
            lat: data.coord.lon,
            lon: data.coord.lon,
          })
        );
        dispatch(ActionGenerator.setIsLocationCorrect(true));
      });
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
          units: 'metric',
          appid: API_KEY,
        },
      })
      .then(({ data }) => {
        dispatch(
          ActionGenerator.setWeekWeathers(
            weekWeatherAdapter(data.daily.slice())
          )
        );
        dispatch(ActionGenerator.setIsDataUpdated(true));
      });
  };
