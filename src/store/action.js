export const ActionType = {
  SET_LOCATION: "weather-app/setLocation",
  SET_COORDINATES: "weather-app/setCoordinates",
  SET_WEEKWEATHERS: "weather-app/setWeekWeathers",
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
};
