import React from 'react';
import { Switch, Route } from 'react-router-dom'
import UserListPage from './containers/UserListPage';
import MainPage from './containers/MainPage'

const Routes = () => (
    <Switch>
      <Route exact path='/' component={ MainPage }/>
      <Route path='/users' component={ UserListPage }/>
    </Switch>
)

export default Routes;
