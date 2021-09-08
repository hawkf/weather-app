import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import DayWeatherMain from '../day-weather-main/day-weather-main';
import WeekWeatherMain from '../week-weather-main/week-weather-main';
import { PageNotFound } from '../page-not-found/page-not-found';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <DayWeatherMain />
        </Route>
        <Route exact path={AppRoute.WEEK}>
          <WeekWeatherMain />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
