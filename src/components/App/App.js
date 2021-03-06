import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginForm from '../LoginForm'
import IssueCert from '../IssueCert'
import ManageClaims from '../ManageClaims'
import ManageAppIds from '../ManageAppIds'
import ManageUsers from '../ManageUsers'
import RequireAuth from '../RequireAuth'
import RequireNoAuth from '../RequireNoAuth'

const App = () => (
  <Switch>
    <Route
      exact
      path={LoginForm.route}
      component={RequireNoAuth(LoginForm, IssueCert.route)}
    />
    <Route
      exact
      path={ManageClaims.route}
      component={RequireAuth(ManageClaims, LoginForm.route)}
    />
    <Route
      exact
      path={IssueCert.route}
      component={RequireAuth(IssueCert, LoginForm.route)}
    />
    <Route
      exact
      path={ManageAppIds.route}
      component={RequireAuth(ManageAppIds, LoginForm.route)}
    />
    <Route
      exact
      path={ManageUsers.route}
      component={RequireAuth(ManageUsers, LoginForm.route)}
    />
    <Redirect to={LoginForm.route} />
  </Switch>
)

export default App
