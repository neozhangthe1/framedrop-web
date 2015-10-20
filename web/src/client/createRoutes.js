import App from './app/app.react';
import Home from './pages/home.react';
import Me from './pages/me.react';
import Login from './pages/login.react.js';
import NotFound from './pages/notFound.react';
import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Discover from './pages/discover.react.js';
import Poi from './pages/poi.react.js';
import Frame from './pages/frame.react.js';
import Movie from './pages/movie.react.js';
import Billboard from './pages/billboard.react.js';

export default function createRoutes(getState) {

  function requireAuth(nextState, replaceState) {
    const loggedIn = getState().users.viewer;
    if (!loggedIn) {
      replaceState({nextPathname: nextState.location.pathname}, '/login');
    }
  }

  return (
    <Route component={App} path="/">
      <IndexRoute component={Home} />
      <Route component={Login} path="login" />
      <Route component={Me} onEnter={requireAuth} path="me" />
      <Route component={Discover} path="discover" />
      <Route component={Poi} path="poi/:id" />
      <Route component={Frame} path="frame/:id" />
      <Route component={Login} path="login" />
      <Route component={Movie} path="movie/:id" />
      <Route component={Billboard} path="billboard/:id" />
      <Route component={NotFound} path="*" />
    </Route>
  );

}
