import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './components/Home/Home';
import { PopupInfo } from './components/PopupInfo/PopupInfo';
import { Details } from './components/Details/Details';

import './App.scss';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id/modal" component={PopupInfo} />
      <Route path="/:id" component={Details} />
    </Switch>

  </div>
);

export default App;
