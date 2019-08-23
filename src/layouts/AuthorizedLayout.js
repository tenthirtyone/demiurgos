import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthorizedPrimaryHeader from '../ui/AuthorizedPrimaryHeader'
import AccountSubLayout from './AccountSubLayout'
import ProjectSubLayout from './ProjectSubLayout'

const AuthorizedLayout = ({ match }) => (
  <div className="app blue authorized-layout">
    <AuthorizedPrimaryHeader />
    <Switch>
      <Route path="/products/add" exact component={AccountSubLayout} />
      <Route path="/products" exact component={AccountSubLayout} />
      <Route path="/dashboard" component={ProjectSubLayout} />
    </Switch>
  </div>
)

export default AuthorizedLayout
