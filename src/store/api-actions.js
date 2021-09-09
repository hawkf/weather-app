import { ActionGenerator } from './action';
import { AppiRoute, API_KEY } from '../utils/const';
import { weekWeatherAdapter } from '../utils/utils';
import swal from 'sweetalert';

const ERROR_MESSAGE = 'An error occurred while loading data';

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
        dispatch(ActionGenerator.setIsDataUpdated(true));
      })
      .catch((data) => {
        dispatch(ActionGenerator.setIsLocationCorrect(false));
        dispatch(ActionGenerator.setIsDataUpdated(true));
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
      })
      .catch(() => swal(ERROR_MESSAGE));
  };
