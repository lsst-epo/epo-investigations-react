import ReactDOM from 'react-dom';
import App from './FormalEd/ColoringTheUniverse/App';
import MilkyWay from './FormalEd/MilkyWay/App';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

render(
  <BrowserRouter>
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
      <Route
        path={`${process.env.PUBLIC_URL}/coloring-the-universe`}
        component={App}
      />
      <Route
        path={`${process.env.PUBLIC_URL}/mapping-the-milky-way`}
        component={MilkyWay}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
