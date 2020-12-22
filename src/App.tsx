import React from 'react';
import { Switch, Route } from 'react-router-dom';
// @ts-ignore
import { ModalContainer } from 'react-router-modal';

import { Home } from './components/Home/Home';
import { PopupInfo } from './components/PopupInfo/PopupInfo';
import { Details } from './components/Details/Details';
import { Favorite } from './components/Favorite/Favorite';

import './App.scss';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/favorite" component={Favorite} />
      <Route path="/:id/modal" component={PopupInfo} />
      <Route path="/:id" component={Details} />
    </Switch>

    <ModalContainer />
  </div>
);

export default App;
