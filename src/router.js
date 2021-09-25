import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import PublicLayout from 'layouts/PublicLayout'
import PublicLayout from 'layouts/PublicLayout'

import MainPage from 'pages/MainPage'
import TestPage from 'pages/TestPage'
import ForbiddenPage from 'pages/ForbiddenPage'

const PublicRoute = ({ component: Component, layout: Layout, path, ...rest }) => {
  const render = props => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }

  return (
    <Route path={path} render={render} {...rest} />
  )
}

const Routes = ({
}) => {
  return (
    <Switch>
      <PublicRoute exact path={'/'} component={MainPage} layout={PublicLayout} />
      <PublicRoute exact path={'/test'} component={TestPage} layout={PublicLayout} />
      <PublicRoute exact path={'/403'} component={ForbiddenPage} layout={PublicLayout} />

      {/* <PublicRoute component={Error404Page} {...unauthRouteProps} /> */}
    </Switch>
  )
}

export default withRouter(Routes)
