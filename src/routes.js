import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MainPage from './containers/MainPage'

const Routes = () => (
    <Switch>
      <Route exact path='/' component={ MainPage }/>
    </Switch>
)

export default Routes;
