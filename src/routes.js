import React from 'react';
import { Switch, Route } from 'react-router-dom'
import UserListPage from './containers/UserListPage';
import MainPage from './containers/MainPage'
import RepoDetailPage from './containers/RepoDetailPage';

const Routes = () => (
    <Switch>
      <Route exact path='/' component={ MainPage }/>
      <Route path='/users' component={ UserListPage }/>
      <Route path='/user/:username/:page' component={ RepoDetailPage }/>
    </Switch>
)

export default Routes;
