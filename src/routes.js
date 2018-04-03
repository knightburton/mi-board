import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Loadable from 'react-loadable';
import App from './components/app';
import Loading from './components/common/loading.component';

/* eslint new-cap: 0 */

const Home = Loadable({
  loader: () => import('./components/home/home.component'),
  loading: Loading
});

const Workout = Loadable({
  loader: () => import('./components/workout/workout.component'),
  loading: Loading
});

const Calendar = Loadable({
  loader: () => import('./components/calendar/calendar.component'),
  loading: Loading
});

export default (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/workout" component={Workout} />
      <Route exact path="/calendar" component={Calendar} />
      <Redirect to="/" />
    </Switch>
  </App>
);
