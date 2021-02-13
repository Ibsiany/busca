import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cadastrar" exact component={Cadastro} />
  </Switch>
);

export default Routes;