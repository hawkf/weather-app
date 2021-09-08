import { ActionType } from './action';

const initialState = {
  location: '',
  coordinates: {
    lat: null,
    lng: null,
  },
  weekWeathers: null,
  isLocationCorrect: false,
  isDataUpdated: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.SET_LOCATION:
      return {
        ...state,
        location: action.payload,
        isDataUpdated: false,
      };

    case ActionType.SET_COORDINATES:
      return {
        ...state,
        coordinates: action.payload,
      };

    case ActionType.SET_WEEKWEATHERS:
      return {
        ...state,
        weekWeathers: action.payload,
      };
    case ActionType.SET_IS_LOCATION_CORRECT:
      return {
        ...state,
        isLocationCorrect: action.payload,
      };
    default:
      return state;
  }
}
