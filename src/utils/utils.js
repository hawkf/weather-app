import dayjs from 'dayjs';

export const weekWeatherAdapter = (weatherArray) => {
  let dateStart = dayjs(new Date());
  let weathersResult = weatherArray.map((item, index) => {
    return {
      date: dateStart.add(index, 'day').format('D MMMM YYYY'),
      temperature: Math.round(item.temp.day),
      description: item.weather[0].main,
    };
  });

  weathersResult.pop();

  return weathersResult;
};
