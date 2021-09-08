export const ActionType = {
  SET_LOCATION: 'weather-app/setLocation',
  SET_COORDINATES: 'weather-app/setCoordinates',
  SET_WEEKWEATHERS: 'weather-app/setWeekWeathers',
  SET_IS_LOCATION_CORRECT: 'weather-app/setIsLocationCorrect',
  SET_IS_DATA_UPDATED: 'weather-app/setIsDataUpdated',
};

export const ActionGenerator = {
  setLocation: (locationName) => ({
    type: ActionType.SET_LOCATION,
    payload: locationName,
  }),

  setCoordinates: (coordinates) => ({
    type: ActionType.SET_COORDINATES,
    payload: coordinates,
  }),

  setWeekWeathers: (weatherData) => ({
    type: ActionType.SET_WEEKWEATHERS,
    payload: weatherData,
  }),

  setIsLocationCorrect: (isLocationCorrect) => ({
    type: ActionType.SET_IS_LOCATION_CORRECT,
    payload: isLocationCorrect,
  }),

  setIsDataUpdated: (isDataUpdated) => ({
    type: ActionType.SET_IS_DATA_UPDATED,
    payload: isDataUpdated,
  }),
};
