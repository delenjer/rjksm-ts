import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Details } from './components/Details/Details';
import { Favorite } from './components/Favorite/Favorite';

import './App.scss';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/favorite" component={Favorite} />
      <Route path="/details" component={Details} />
    </Switch>
  </div>
);

export default App;
