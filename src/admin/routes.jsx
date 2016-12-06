import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import { App, SearchRoutes, Ports, Transports, Cost, Scrapper } from './containers';

const routes = (
  <Router history={browserHistory}>
    <Route path="/admin" component={App}>
      <IndexRoute component={SearchRoutes} />
      <Route path="search" component={SearchRoutes} />
      <Route path="ports" component={Ports} />
      <Route path="transports" component={Transports} />
      <Route path="cost" component={Cost} />
      <Route path="scrapper" component={Scrapper} />
    </Route>
  </Router>
);

export default routes;
